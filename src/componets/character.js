import React from "react";

export default function Character({ character }){
let text = "Loading...";
return (
    <p id="author">
        <span className="letter-spacing">
            &mdash;&mdash;&mdash;&mdash; {character ? character : text}
        </span>
    </p>
);
}