import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

// eslint-disable-next-line
import "@lottiefiles/lottie-player";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
