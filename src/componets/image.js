import React from "react";

export default function Image({ image, character, direction }) {
    if (image === "") {
        return "Loading Image...";
    } else if (direction === "Left") {
        return (
            <img
                className="left"
                src={image}
                alt={`Simpsons character: ${character}`}
            />
        );
    } else {
        return  <img src={image} alt={`Simpsons character: ${character}`}/>
    }
}
