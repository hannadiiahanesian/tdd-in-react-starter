import React from "react";
import { render } from "react-dom";
import JokeGenerator from "./jokeGenerator";

const App = () => (
    <div>
        <JokeGenerator />
    </div>
);

render(<App />, document.getElementById("root"));