import starUnfilled from "../assets/star-light-unfilled.svg";
import "../styles/Rate.css";

function Rate() {
  return (
    <div className="rating-component">
      <img src={starUnfilled} alt="" />
      <img src={starUnfilled} alt="" />
      <img src={starUnfilled} alt="" />
      <img src={starUnfilled} alt="" />
      <img src={starUnfilled} alt="" />
    </div>
  );
}

export default Rate;
