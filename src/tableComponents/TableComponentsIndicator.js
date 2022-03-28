import { useContext, useEffect } from "react";

import "./TableComponentsIndicator.css";

import { TableScoreContext } from "../tableScoreArea/TableScoreContext";

const TableComponentsIndicator = () => {
  const { time, setTime, setIsEnd } = useContext(TableScoreContext);

  /* FILLING THE INDICATOR */

  useEffect(() => {
    if (time <= 20) {
      setTimeout(() => setTime((oldTime) => oldTime + 0.25), 1000);
    } else {
      setIsEnd(true);
    }
  }, [time]);

  return (
    <>
      <div className="table-indicator">
        <div className="title">TIMER</div>
        <div className="level" style={{ height: `${time}em` }}></div>
      </div>
    </>
  );
};

export default TableComponentsIndicator;
