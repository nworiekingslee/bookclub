import { useState } from "react";
import starUnfilled from "../assets/star-filled-light.svg";
import starFilledGrey from "../assets/star-dark-unfilled.svg";
import "../styles/Rate.css";

type RateProps = {
  variant?: "big" | "small";
  color?: "dark" | "light";
  rating: number;
  filledColor?: string;
};

export default function Rate({ rating, variant, color, filledColor }: RateProps) {
  const [currentRating, setCurrentRating] = useState(rating);
  const [hoverRating, setHoverRating] = useState(0); // add hoverRating state variable

  return (
    <div className={`rating-component ${variant}`}>
      <img
        src={hoverRating >= 1 || currentRating >= 1 ? filledColor ?? starUnfilled : color === "dark" ? starFilledGrey : starUnfilled}
        alt=""
        onClick={() => setCurrentRating(1)}
        onMouseEnter={() => setHoverRating(1)} // set hoverRating on mouse enter
        onMouseLeave={() => setHoverRating(0)} // reset hoverRating on mouse leave
      />
      <img
        src={hoverRating >= 2 || currentRating >= 2 ? filledColor ?? starUnfilled : color === "dark" ? starFilledGrey : starUnfilled}
        alt=""
        onClick={() => setCurrentRating(2)}
        onMouseEnter={() => setHoverRating(2)}
        onMouseLeave={() => setHoverRating(0)}
      />
      <img
        src={hoverRating >= 3 || currentRating >= 3 ? filledColor ?? starUnfilled : color === "dark" ? starFilledGrey : starUnfilled}
        alt=""
        onClick={() => setCurrentRating(3)}
        onMouseEnter={() => setHoverRating(3)}
        onMouseLeave={() => setHoverRating(0)}
      />
      <img
        src={hoverRating >= 4 || currentRating >= 4 ? filledColor ?? starUnfilled : color === "dark" ? starFilledGrey : starUnfilled}
        alt=""
        onClick={() => setCurrentRating(4)}
        onMouseEnter={() => setHoverRating(4)}
        onMouseLeave={() => setHoverRating(0)}
      />
      <img
        src={hoverRating >= 5 || currentRating >= 5 ? filledColor ?? starUnfilled : color === "dark" ? starFilledGrey : starUnfilled}
        alt=""
        onClick={() => setCurrentRating(5)}
        onMouseEnter={() => setHoverRating(5)}
        onMouseLeave={() => setHoverRating(0)}
      />
    </div>
  );
}


