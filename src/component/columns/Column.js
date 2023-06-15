import React, { useEffect, useState } from "react";

import Card from "../card/Card";
import { styled } from "@stitches/react";
import { set } from "lodash";

//Phan CSS
const Col = styled("div", {
  "*": {
    backgroundColor: "#ebecf0",
    color: "#333",
    padding: "0 8px",
  },
  flex: "0 0 auto",
  width: "300px",
  height: "calc(100% - 10px)",
});

const CardList = styled("div", {
  listStyleType: "none",
  margin: 0,
  maxHeight: "calc(100% -72px)",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    "-webkit-animation": "none",
  },
  "&::-webkit-scrollbar:vertical": {
    width: "11px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#a6a7ac",
    borderRight: "5px solid #ebecf0",
  },
});
const Hea = styled("header", {
  paddingLeft: "15px",
  height: "36px",
  lineHeight: "36px",
  fontSize: "16px",
  fontWeight: "bold",
  borderTopLeftRadius: "5px",
  borderTopRightRadius: "5px",
  cursor: "pointer",
});

const Foo = styled("footer", {
  paddingLeft: "10px",
  height: "36px",
  lineHeight: "36px",
  fontSize: "16px",
  fontWeight: "bold",
  borderBottomLeftRadius: "5px",
  borderBottomRightRadius: "5px",
  color: "#888",
  "&:hover": {
    color: "#333",
  },
});

//Phan logic
export const ColumnContext = React.createContext({});

const Column = (props) => {
  const { column } = props;
  const [col, setCol] = useState(column);
  const [list, setList] = useState(col.cards);
  const [draggingItem, setDraggingItem] = useState({});

  console.log("update", draggingItem);
  function dragOver(e) {
    console.log("dragover", e.id);
  }
  function drop(ev) {
    //const targetColumn = ev.target;
    setCol({
      ...col,
      cards: [draggingItem],
    });
    console.log("drop");
    // setList([...list, {}]);
  }
  console.log(col);
  return (
    <ColumnContext.Provider value={{ draggingItem, setDraggingItem }}>
      <Col>
        <Hea>{column.title}</Hea>
        <CardList
          draggable="true"
          onDragOver={() => {
            dragOver(col);
          }}
          onDrop={(e) => {
            console.log("drop");
          }}
        >
          {list &&
            list.length > 0 &&
            list.map((card, index) => {
              return <Card key={card.id} card={card} />;
            })}
        </CardList>
        <Foo>+ Add another card</Foo>
      </Col>
    </ColumnContext.Provider>
  );
};

export default Column;
