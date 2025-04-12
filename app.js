import React from "react";
import { createRoot } from "react-dom/client";


const parent = React.createElement(
    "div", 
    {id:"parent"},[
    React.createElement("div",{id:"child",key:"child1"},[
        React.createElement("h1",{key:"h11"},"I am a h1 Tag"),
        React.createElement("h2",{key:"h21"},"I am a h2 Tag")
    ]),
    React.createElement("div",{id:"child2",key:"child2"},[
        React.createElement("h3",{key:"h12"},"I am a h1 Tag"),
        React.createElement("h4",{key:"h22"},"I am a h2 Tag")
    ]),
    ]);

console.log(parent);

const root = createRoot(document.getElementById("root"));

root.render(parent);