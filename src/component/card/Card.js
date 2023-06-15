import React, { useContext, useState } from "react";

import { styled } from "@stitches/react";
import { set } from "lodash";
import { ColumnContext } from "../columns/Column";

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
  const { setDraggingItem } = useContext(ColumnContext);

  const dragStart = (e) => {
    setDraggingItem(e);
  };

  return (
    <>
      <CartItem
        draggable="true"
        onDragStart={() => {
          dragStart(card);
        }}
      >
        {card.image && <Img src={card.image} />}
        {card.title}
      </CartItem>
    </>
  );
};

export default Card;
