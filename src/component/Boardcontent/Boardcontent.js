import React, { useEffect, useState } from "react";

import Column from "../columns/Column.js";
import { initData } from "../../actions/initData";
import _ from "lodash";
import { mapOrder } from "../../utilities/sorts";
import { styled } from "@stitches/react";
import { applyDrag } from "../../actions/drag&drop.js";

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
const Addnewcolumns = styled("div", {
  width: "250px",
  //height: "32px",
  lineHeight: "32px",
  padding: "4px 0 4px 15px",
  cursor: "pointer",
  color: "Black",
  marginLeft: "0",
  fontSize: "15px",
  backgroundColor: "WhiteSmoke",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: "Gray",
  },
});
const ContentAdd = styled("div", {
  padding: "5px",

  backgroundColor: "hsla(0,0,100,.24)",
});
const Groupbutton = styled("button", {
  display: "flex",
  marginTop: "10px",
  alignItems: "center",
});

//Phan Logic
const Boardcontent = () => {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);

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
  //console.log(columns);
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
        <div>
          <Addnewcolumns>+ Add another card</Addnewcolumns>
          <ContentAdd>
            <input type="text" />
            <Groupbutton>Add list</Groupbutton>
            <div>X</div>
          </ContentAdd>
        </div>
      </Boardcolumns>
    </>
  );
};

export default Boardcontent;
