import React from "react";
import { styled } from "@stitches/react";

const Boardbar = () => {
  const Nav = styled("nav", {
    paddingLeft: "10px",
    display: "flex",
    alignItems: "center",
    fontSize: "1.1rem",
    backgroundColor: "#0079bf",
  });
  return (
    <>
      <Nav>Board bar</Nav>
    </>
  );
};
export default Boardbar;
