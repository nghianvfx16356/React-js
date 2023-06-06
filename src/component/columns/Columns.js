import React from "react";
import './Columns.css'
import Task from "../task/Task";


const Columns = () => {
    return (
        <>
            <div className='columns'>
                <header>Brainstorm</header>
                <ul className="task-list">
                    <Task />

                    <li className="task-items">Second</li>
                    <li className="task-items">thir</li>
                    <li className="task-items">Second</li>
                    <li className="task-items">thir</li>
                    <li className="task-items">Second</li>
                    <li className="task-items">thir</li>
                    <li className="task-items">Second</li>
                    <li className="task-items">thir</li>
                    <li className="task-items">Second</li>
                    <li className="task-items">thir</li>
                    <li className="task-items">Second</li>
                    <li className="task-items">thir</li>
                    <li className="task-items">thir</li>
                    <li className="task-items">thir</li>

                </ul>
                <footer>Add another card</footer>
            </div>
        </>
    )
}

export default Columns;