import React from "react";
import { Card } from "../card/card-component";
import "./card-list-styles.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => {
        console.log(props, "Props here");
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};
