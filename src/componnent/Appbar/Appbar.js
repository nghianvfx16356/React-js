import React from "react";
import { styled } from "@stitches/react";

const Appbar = () => {
  const Nav = styled("nav", {
    padding: "10px",
    display: "flex",
    alignItems: "center",
    fontSize: "1.5rem",
    backgroundColor: "#0067a3",
  });
  return (
    <>
      <Nav>Trello App</Nav>
    </>
  );
};

export default Appbar;
