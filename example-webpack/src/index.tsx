import React from "react";
import ReactDOM from "react-dom/client";

const App = () => <div>예시</div>;

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(<App />);
