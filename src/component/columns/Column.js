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
});

const Foo = styled("footer", {
  paddingLeft: "10px",
  height: "36px",
  lineHeight: "36px",
  fontSize: "16px",
  fontWeight: "bold",
  borderBottomLeftRadius: "5px",
  borderBottomRightRadius: "5px",
});

//Phan logic

const Column = (props) => {
  const { column } = props;
  const cards = column.cards;
  // const [columns, setColumns] = useState(column);
  // console.log(columns);

  return (
    <Col
      draggable={true}
      // onDragStart={(e) => {
      //   console.log("Drag start", e);
      // }}
      // onDragOver={(e) => {
      //   console.log("Drag over", e);
      // }}
      // onDrop={(e) => {
      //   console.log("Drop ", e);
      // }}
      // onDragLeave={(e) => {
      //   console.log("Drag leave", e);
      // }}
    >
      <Hea>{column.title}</Hea>
      <CardList>
        {cards &&
          cards.length > 0 &&
          cards.map((card, index) => {
            return <Card key={card.id} card={card} />;
          })}
      </CardList>
      <Foo>Add another card</Foo>
    </Col>
  );
};

export default Column;
