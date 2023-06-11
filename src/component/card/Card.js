import React, { useState } from "react";

import { styled } from "@stitches/react";

// Phan css
const CartItem = styled("div", {
  backgroundColor: "White",
  padding: "10px",
  borderRadius: "3px",
  boxShadow: "0 1px 1px rgba(0,0,0,0.1)",
  "&:not(:last-child)": {
    marginBottom: "10px",
  },
});
const Img = styled("img", {
  display: "block",
  width: "calc(100% + 20px)",
  margin: "-10px 0 10px -18px",
  borderTopLeftRadius: "3px",
  borderTopRightRadius: "3px",
});

// logic
const Card = (props) => {
  const { card } = props;
  // console.log(cards);

  return (
    <>
      <CartItem
        draggable={true}
        onDragStart={(e) => {
          e.dataTransfer.setData("text/plain", card);
          // console.log("Drag start", e);
        }}
        onDragOver={(e) => {
          e.preventDefault();
          // console.log("Drag over", e);
        }}
        onDrop={(e) => {
          e.preventDefault();
          console.log(e);
          const droppedItem = e.dataTransfer.getData(card);
          console.log(droppedItem);
          // e.target.innerHTML = droppedItem;
          // if ((e.target.className = "c-iMyqqg")) {

          // }
          // console.log("Drop ", e);
        }}
        // onDragLeave={(e) => {

        //   console.log("Drag leave", e);
        // }}
      >
        {card.image && <Img src={card.image} />}
        {card.title}
      </CartItem>
    </>
  );
};

export default Card;
