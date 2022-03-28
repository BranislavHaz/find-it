import React, { useState } from "react";

import "./Table.css";

import { TableScoreContext } from "../tableScoreArea/TableScoreContext";
import TablePlayingArea from "../tablePlayingArea/TablePlayingArea";
import TableScoreArea from "../tableScoreArea/TableScoreArea";
import TableEndScene from "../tableEndScene/TableEndScene";

const Table = () => {
  /* CONTEXT DATA */

  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [match, setMatch] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  /* HELPER FUNCTIONS FOR END SCENE */

  const showGame = () => {
    return (
      <>
        <TablePlayingArea />
        <TableScoreArea />
      </>
    );
  };

  const showEndScene = () => {
    return <TableEndScene />;
  };

  return (
    <>
      <div className="table">
        <TableScoreContext.Provider
          value={{
            score,
            setScore,
            time,
            setTime,
            match,
            setMatch,
            isEnd,
            setIsEnd,
          }}
        >
          {isEnd ? showEndScene() : showGame()}
        </TableScoreContext.Provider>
      </div>
    </>
  );
};

export default Table;
