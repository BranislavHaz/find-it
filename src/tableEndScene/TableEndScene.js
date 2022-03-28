import React, { useContext } from "react";

import "./TableEndScene.css";

import { TableScoreContext } from "../tableScoreArea/TableScoreContext";

import restart from "../img/restart.png";

const TableEndScene = () => {
  const { score, setScore, setTime, setIsEnd } = useContext(TableScoreContext);

  const handleReset = () => {
    setTime(0);
    setScore(0);
    setIsEnd(false);
  };

  return (
    <div className="end-scene">
      <div className="end-scene-box">
        <h2>Your Score:</h2>
        <h1>{score}</h1>
      </div>
      <div className="restart-button" onClick={handleReset}>
        <img src={restart} width="100%" height="auto" alt="restart-button" />
      </div>
    </div>
  );
};

export default TableEndScene;
