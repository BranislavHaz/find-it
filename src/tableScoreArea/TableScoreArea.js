import "./TableScoreArea.css";

import TableComponentsScore from "../tableComponents/TableComponentsScore";
import TableComponentsIndicator from "../tableComponents/TableComponentsIndicator";

const TableScoreArea = () => {
  return (
    <div className="score-area">
      <TableComponentsScore />
      <TableComponentsIndicator />
    </div>
  );
};

export default TableScoreArea;
