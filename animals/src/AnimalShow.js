import { useState } from "react";
import "./Animal.css";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const svgMap = {bird, cat, cow, dog, gator, horse}

const AnimalShow = ({animal}) => {
  const [clicks, setClicks] = useState(0)
  return(
    <div className="animal-show">
      <img className="animal" onClick={() => setClicks(clicks + 1)} src={svgMap[animal]} alt="animal"/>
      <img className="heart" src={heart} alt="heart" style={{width: 10 + 10 * clicks + "px"}}/>
    </div>
  )
}
export default AnimalShow;