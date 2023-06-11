import Appbar from "./component/Appbar/Appbar.js";
import Boardbar from "./component/Boardbar/Boardbar.js";
import "./App.css";
import Boardcontent from "./component/Boardcontent/Boardcontent.js";
import { styled } from "@stitches/react";

function App() {
  const Div = styled("div", {
    height: "100vh",
    display: "grid",
    gridTemplateRows: "40px 50px 1fr",
    backgroundColor: "#00079bf",
  });
  return (
    <Div>
      <Appbar />
      <Boardbar />
      <Boardcontent />
    </Div>
  );
}

export default App;
