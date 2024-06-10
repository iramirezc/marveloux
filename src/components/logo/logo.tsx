import React from "react";

const defaultWidth = 130;
const defaultHeight = 52;

type LogoProps = {
  width?: number;
  height?: number;
};

const Logo = ({ width = defaultWidth, height = defaultHeight }: LogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={width}
    height={height}
    viewBox="0 0 130 52"
  >
    <g clipPath="url(#a)">
      <path fill="#EC1D24" d="M130-.003H0v52h130v-52Z" />
      <path
        fill="#FEFEFE"
        d="M126.222 40.056v7.906H111.58V3.997h7.885v36.06h6.757Zm-62.564-14.5c-.61.294-1.248.44-1.87.442v-14.14h.04c.622-.005 5.264.184 5.264 6.993 0 3.56-1.58 5.804-3.434 6.705ZM40.55 34.237l2.183-18.799 2.265 18.8H40.55Zm69.655-22.215V4.004H87.879l-3.675 26.78-3.63-26.78h-8.052l.901 7.15c-.928-1.833-4.224-7.15-11.48-7.15-.047-.003-8.06 0-8.06 0l-.031 39.031-5.868-39.03-10.545-.006-6.072 40.44.002-40.435H21.278L17.64 26.721 14.096 4.003H4V47.97h7.95V26.777l3.618 21.192h4.226l3.565-21.192V47.97h15.327l.928-6.762h6.17l.927 6.762 15.047.008h.01v-.008h.02V33.7l1.845-.27 3.817 14.55h7.784l-.002-.01h.022l-5.011-17.048c2.538-1.88 5.406-6.644 4.643-11.203v-.002c.008.058 4.729 28.281 4.729 28.281l9.256-.027 6.327-39.85v39.85h15.007v-7.908h-7.124v-10.08h7.124v-8.03h-7.124v-9.93h7.124Z"
      />
      <path fill="#EC1D24" d="M0-.003h30v52H0v-52Z" />
      <path
        fill="#FEFEFE"
        d="M31.5 47.997v-44H21.291l-3.64 22.735-3.549-22.735H4v44h8V26.79l3.577 21.208h4.229l3.568-21.208v21.208H31.5Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0-.003h130v52H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default Logo;