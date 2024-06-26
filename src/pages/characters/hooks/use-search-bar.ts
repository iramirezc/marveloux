import { useEffect } from "react";

import charactersService from "../../../services/characters";
import { useAppLoadingState, useSearchState } from "../../../store/hooks";

const DEBOUNCE_DELAY = 900;

export const useSearchBar = () => {
  const { setLoading } = useAppLoadingState();
  const {
    isSearching,
    searchCriteria,
    results,
    clearSearch,
    setIsSearching,
    setSearchResults,
    setSearchCriteria
  } = useSearchState();

  const onChangeSearchCriteria = (newSearchCriteria: string) => {
    setIsSearching(true);
    setSearchResults([]);
    setSearchCriteria(newSearchCriteria);
  };

  const searchCharactersByName = async (name: string) => {
    setLoading(true);

    try {
      const characters = await charactersService.fetchCharactersByName(name);
      setSearchResults(characters);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setIsSearching(false);
    }
  };

  useEffect(() => {
    // If the search criteria is empty, don't search
    if (!searchCriteria) {
      setIsSearching(false);
      return;
    }

    // Debounce the search to avoid making too many requests
    const id = setTimeout(() => {
      searchCharactersByName(searchCriteria);
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(id);
    // eslint-disable-next-line
  }, [searchCriteria]);

  return {
    results,
    isSearching,
    searchCriteria,
    clearSearch,
    onChangeSearchCriteria
  };
};
