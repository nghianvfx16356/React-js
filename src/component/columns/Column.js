import React from "react";
import './Columns.css'
import Card from "../card/Card";


const Column = (props) => {

    const { column } = props;
    const cards = column.cards;
    return (
        <>
            <div className='columns'>
                <header>{column.title}</header>
                <ul className="task-list">
                    {cards && cards.length > 0 && cards.map((card, index) => {
                        return (
                            <Card key={card.id} card={card} />
                        )
                    })}


                    <li className="card-items">Second</li>
                    <li className="card-items">Second</li>
                    <li className="card-items">thir</li>
                    <li className="card-items">Second</li>
                    <li className="card-items">thir</li>
                    <li className="card-items">Second</li>
                    <li className="card-items">thir</li>
                    <li className="card-items">Second</li>
                    <li className="card-items">thir</li>
                    <li className="card-items">Second</li>
                    <li className="card-items">thir</li>
                    <li className="card-items">thir</li>
                    <li className="card-items">thir</li>

                </ul>
                <footer>Add another card</footer>
            </div>
        </>
    )
}

export default Column;