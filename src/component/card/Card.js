import React from "react";
import './Card.css';

const Card = (props) => {
    const { card } = props;
    return (
        <>
            <li className="card-items">
                {card.image && <img className="card-cover" src={card.image} />}
                {card.title}
            </li>
        </>
    )
}

export default Card;