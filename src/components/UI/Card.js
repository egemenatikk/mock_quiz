import React from "react";
import stylesCard from "./Card.module.css";

function Card(props) {
  return (
    <div className={`${stylesCard.card} ${props.className}`}>{props.children}</div>
  );
}

export default Card;
