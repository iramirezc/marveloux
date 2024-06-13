import charactersCache from "./characters-cache";
import storageService from "../storage/storage-service";
import { isExpired, getNow } from "../../utils/time-utils";

jest.mock("../../utils/time-utils");

describe("Characters Cache", () => {
  beforeEach(() => {
    jest.mocked(getNow).mockReturnValue(1);
  });

  afterEach(() => {
    storageService.clear();
  });

  describe("charactersCache.save()", () => {
    test("saves data and last fetch time", () => {
      const data = { foo: "bar" };

      charactersCache.save(data);

      expect(storageService.get("characters")).toEqual(data);
      expect(storageService.get("characters_lastFetch")).toBe(1);
    });
  });

  describe("charactersCache.get()", () => {
    test("returns null if cache is empty", () => {
      const cache = charactersCache.get();

      expect(cache).toBeNull();
    });

    test("returns null if cache is expired", () => {
      jest.mocked(isExpired).mockReturnValueOnce(true);

      charactersCache.save({ foo: "bar" });

      const cache = charactersCache.get();

      expect(cache).toBeNull();
    });

    test("removes cache if expired", () => {
      jest.mocked(isExpired).mockReturnValueOnce(true);

      charactersCache.save({ foo: "bar" });

      charactersCache.get();

      expect(storageService.get("characters")).toBeNull();
      expect(storageService.get("characters_lastFetch")).toBeNull();
    });

    test("returns cached data if cache is not expired", () => {
      const data = { foo: "bar" };

      charactersCache.save(data);

      const cache = charactersCache.get();

      expect(cache).toEqual(data);
    });
  });

  describe("charactersCache.clear()", () => {
    test("removes cache", () => {
      charactersCache.save({ foo: "bar" });

      charactersCache.clear();

      expect(storageService.get("characters")).toBeNull();
      expect(storageService.get("characters_lastFetch")).toBeNull();
    });
  });
});
