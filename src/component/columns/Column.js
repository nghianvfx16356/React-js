import React, { useState } from "react";

import Card from "../card/Card";
import { styled } from "@stitches/react";

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

const Column = (props) => {
  const { column } = props;
  //const cards = column.cards;
  const [list, setList] = useState(column.cards);
  console.log(list);
  function dragStart(data) {
    console.log(data);
    //data.dataTransfer.setData("text", data);
  }
  function allowDrop(e) {
    e.preventDefault();
  }
  function drop(e) {
    e.preventDefault();
    let data = ev.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  }

  return (
    <Col>
      <Hea>{column.title}</Hea>
      <CardList>
        {list &&
          list.length > 0 &&
          list.map((card, index) => {
            return (
              <Card
                key={card.id}
                card={card}
                onDragStart={() => {
                  dragStart(list);
                }}
              />
            );
          })}
      </CardList>
      <Foo>+ Add another card</Foo>
    </Col>
  );
};

export default Column;
