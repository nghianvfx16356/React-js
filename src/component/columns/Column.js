import React from "react";
import "./Columns.css";
import Card from "../card/Card";

const Column = (props) => {
  const { column } = props;
  const cards = column.cards;

  return (
    <div
      className="columns"
      draggable
      onDragStart={(e) => {
        console.log('Drag start', e)
      }}
      onDragOver={(e) => {
        console.log('Drag over', e);
      }}
      onDragLeave={(e) => {
        console.log('Drag leave', e)
      }}
      onDrop={(e) => {
        console.log('Drop in col', e)
      }}
    >
      <header>{column.title}</header>
      <div className="task-list">
        {cards &&
          cards.length > 0 &&
          cards.map((card, index) => {
            return <Card key={card.id} card={card} />;
          })}
      </div>
      <footer>Add another card</footer>
    </div>
  );
};

export default Column;
