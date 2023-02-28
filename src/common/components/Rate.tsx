import { useState } from "react";
import starUnfilled from "../assets/star-light-unfilled.svg";
import starFilledGrey from "../assets/star-filled-light.svg";
import "../styles/Rate.css";

type RateProps = {
  variant?: "big" | "small";
  color?: "dark" | "light";
};

function Rate({ variant, color }: RateProps) {
  const [star, setStar] = useState(4);

  return (
    <div className={`rating-component ${variant}`}>
      <img src={color === "dark" ? starFilledGrey : starUnfilled} alt="" />
      <img src={color === "dark" ? starFilledGrey : starUnfilled} alt="" />
      <img src={color === "dark" ? starFilledGrey : starUnfilled} alt="" />
      <img src={color === "dark" ? starFilledGrey : starUnfilled} alt="" />
      <img src={color === "dark" ? starFilledGrey : starUnfilled} alt="" />
    </div>
  );
}

export default Rate;
