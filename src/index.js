import React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";

if (process.env.NODE_ENV === "production") {
  import("./styles.css");
} else {
  // Make sure that the custom stylesheet overrides antd css.
  import("antd/dist/antd.css").then(() => import("./styles.css"));
}
console.log(`process.env.NODE_ENV=${process.env.NODE_ENV}`);

function App() {
  return (
    <div className="App">
      <h1>Ant Design</h1>
      <Button>AntD Button</Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
