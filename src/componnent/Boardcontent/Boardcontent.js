import React from "react";
import { styled } from "@stitches/react";
import ColumnsContainer from "../column/Columns";
import "./Boardcontent.css";

const Boardcontent = () => {
  return (
    <>
      <div>
        <div style={{ fontSize: "20px", marginLeft: "10px" }}>Todo</div>
        <ColumnsContainer />
      </div>
    </>
  );
};
export default Boardcontent;
