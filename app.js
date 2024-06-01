import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement("div", {id: "parent"},[
    React.createElement("div", {id : "child"}, 
[React.createElement("h1", {}, "hello world"),
React.createElement("h2", {}, "hello world 2")]
)
],[
    React.createElement("div", {id : "child2"}, 
[React.createElement("h1", {}, "hello world"),
React.createElement("h2", {}, "hello world 2")]
)
]

)
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent) 