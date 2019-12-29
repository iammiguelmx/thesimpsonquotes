import React from "react";

export default function Quote({ quote }) {
    let text = "Not avaliable at the moment...";

    return (
        <blockquote id="text">
            <span id="quotation-mark">&rdquo;</span>
            {quote ? quote : text}
            <span id="quotation-mark">&rdquo;</span>
        </blockquote>
    );
}