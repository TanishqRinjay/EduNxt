import React from "react";
import "./HighlightText.css"

const HighlightText = ({ text }) => {
    return <span className="font-bold highlighted"> {text}</span>;
};

export default HighlightText;
