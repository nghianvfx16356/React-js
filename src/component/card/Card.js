import React from "react";
import "./Card.css";

const Card = (props) => {
  const { card } = props;
  return (
    <>
      <div
        className="card-items"
        draggable
        
        onDragStart={(e) => {
            // element = e.target  
            console.log("Drag start", e);
        }}
        onDragOver={(e) => {
          console.log("Drag over", e);
        }}
        onDrop={(e) => console.log('Drop ', e)}
        // onDragLeave={(e) => {

        //   console.log("Drag leave", e);
        // }}
      >
        {card.image && <img className="card-cover" src={card.image} />}
        {card.title}
      </div>
    </>
  );
};

export default Card;
