import { useState, useEffect, useContext } from "react";
import "./TableComponentsCard.css";

import { TableScoreContext } from "../tableScoreArea/TableScoreContext";

// IMPORT ICONS
import axolotl from "../img/axolotl.png";
import crab from "../img/crab.png";
import dinosaur from "../img/dinosaur.png";
import giraffe from "../img/giraffe.png";
import chameleon from "../img/chameleon.png";
import koala from "../img/koala.png";
import lion from "../img/lion.png";
import sheep from "../img/sheep.png";
import tiger from "../img/tiger.png";
import turtle from "../img/turtle.png";
import octopus from "../img/octopus.png";
import penguin from "../img/penguin.png";
import starfish from "../img/starfish.png";
import frog from "../img/frog.png";
import whale from "../img/whale.png";
import spider from "../img/spider.png";
import hamster from "../img/hamster.png";
import seal from "../img/seal.png";

const TableComponentsCard = ({ who, number }) => {
  const icons = [
    axolotl,
    crab,
    dinosaur,
    giraffe,
    chameleon,
    koala,
    lion,
    sheep,
    tiger,
    turtle,
    octopus,
    penguin,
    starfish,
    frog,
    whale,
    spider,
    hamster,
    seal,
  ];

  const [npcIcons, setNpcIcons] = useState([]);
  const [playerIcons, setPlayerIcons] = useState([]);
  const { setScore } = useContext(TableScoreContext);

  /* GENERATE NPC ICONS */
  const getNpcIcons = (num) => {
    let numArray = [num];

    for (let i = 0; i < 8; i++) {
      numArray[i] !== 0
        ? numArray.push(numArray[i] - 1)
        : numArray.push(icons.length - 1);
    }
    return numArray.sort(() => Math.random() - 0.5);
  };

  /* GENERATE PLAYER ICONS */
  const getPlayerIcons = (num) => {
    let numArray = [num];

    for (let i = 0; i < 8; i++) {
      numArray[i] < icons.length - 1
        ? numArray.push(numArray[i] + 1)
        : numArray.push(0);
    }
    return numArray.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setNpcIcons(getNpcIcons(number));
    setPlayerIcons(getPlayerIcons(number));
  }, [number]);

  /* COMPARE ICONS */
  const compareIcons = (e) => {
    npcIcons.includes(+e.target.name)
      ? setScore((oldScore) => oldScore + 10)
      : setScore((oldScore) => oldScore - 5);
  };

  return (
    <div className="card-wrapper">
      <div className={`card card-${who}`}>
        {who === "npc"
          ? npcIcons.map((num, id) => (
              <img key={id} className="icon" src={icons[num]} alt=""></img>
            ))
          : playerIcons.map((num, id) => (
              <img
                key={id}
                name={num}
                className="icon"
                src={icons[num]}
                onClick={compareIcons}
                alt=""
              ></img>
            ))}
      </div>
    </div>
  );
};

export default TableComponentsCard;
