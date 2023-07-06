import React from "react";
import { styled } from "@stitches/react";

const Boardbar = () => {
  const Nav = styled("nav", {
    paddingLeft: "10px",
    display: "flex",
    paddingTop: "5px",
    paddingBottom: "10px",
    alignItems: "center",
    fontSize: "1.1rem",
    backgroundColor: "#0079bf",
  });
  return (
    <>
      <Nav>What do you want</Nav>
    </>
  );
};
export default Boardbar;
