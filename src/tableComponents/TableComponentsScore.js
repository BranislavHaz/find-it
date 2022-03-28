import { useContext, useState, useEffect, useRef } from "react";

import "./TableComponentsScore.css";

import { TableScoreContext } from "../tableScoreArea/TableScoreContext";

const TableComponentsScore = () => {
  const { score, setMatch } = useContext(TableScoreContext);
  const [isMatch, setIsMatch] = useState();
  const prevScore = useRef();

  /* DOUBLE VERIFICATION */

  useEffect(() => {
    if (prevScore.current < score) {
      setMatch((prevMatch) => !prevMatch);
      setIsMatch("match");
      setTimeout(() => setIsMatch(""), 100);
    } else {
      setMatch((prevMatch) => prevMatch);
      setIsMatch("dismatch");
      setTimeout(() => setIsMatch(""), 100);
    }

    prevScore.current = score;
  }, [score]);

  return (
    <div className={`score ${isMatch ? isMatch : ""}`}>
      <div className="score-title">Score:</div>
      <div className="score-points">{score}</div>
    </div>
  );
};

export default TableComponentsScore;
