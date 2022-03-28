import { useEffect, useState, useContext } from "react";
import "./TablePlayingArea.css";

import { TableScoreContext } from "../tableScoreArea/TableScoreContext";
import TableComponentsCard from "../tableComponents/TableComponentsCard";

const TablePlayingArea = () => {
  const [randomNumber, setRandomNumber] = useState();
  const { match } = useContext(TableScoreContext);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 18));
  }, [match]);

  return (
    <div className="playing-area">
      <TableComponentsCard who="npc" number={randomNumber} />
      <TableComponentsCard who="player" number={randomNumber} />
    </div>
  );
};

export default TablePlayingArea;
