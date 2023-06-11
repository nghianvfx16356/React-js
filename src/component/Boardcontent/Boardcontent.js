import React, { useEffect, useState } from "react";

import Column from "../columns/Column.js";
import { initData } from "../../actions/initData";
import _ from "lodash";
import { mapOrder } from "../../utilities/sorts";
import { styled } from "@stitches/react";

//Phan CSS
const Boardcolumns = styled("div", {
  display: "flex",
  margin: "0 10px 10px",
  gap: "10px",
  overflowX: "auto",
  scrollbarWidth: "thin",
  "&::-webkit-scrollbar": {
    "-webkit-appearance": "none",
  },
  "&::-webkit-scrollbar:horizontal": {
    height: "11px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(255, 255, 255, .24)",
    borderRadius: "5px solid #ebecf0",
    backgroundClip: "padding-box",
  },
});

//Phan Logic
const Boardcontent = () => {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);
  const [obj, setObj] = useState();

  useEffect(() => {
    const boardInitData = initData.boards.find((item) => item.id === "board-1");
    if (boardInitData) {
      setBoard(boardInitData);

      setColumns(
        mapOrder(boardInitData.columns, boardInitData.columnOrder, "id")
      );
    }
  }, []);

  if (_.isEmpty(board)) {
    return (
      <>
        <div className="not-found">Board not found</div>
      </>
    );
  }
  // console.log(columns);
  // const boa = columns ? columns[0] : null;
  // const cad = boa.cards;
  // const card = cad ? cad[0] : null;
  // console.log(card);

  return (
    <>
      <Boardcolumns>
        {columns &&
          columns.length > 0 &&
          columns.map((column, index) => {
            return (
              <>
                <Column key={column.id} column={column} />
              </>
            );
          })}
      </Boardcolumns>
    </>
  );
};

export default Boardcontent;
