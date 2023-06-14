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
  //console.log(props);

  return (
    <>
      <CartItem draggable="true">
        {card.image && <Img src={card.image} />}
        {card.title}
      </CartItem>
    </>
  );
};

export default Card;
