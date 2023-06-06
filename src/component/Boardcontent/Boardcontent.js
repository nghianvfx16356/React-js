import React from "react";
import './Boardontent.css';
import Columns from "../columns/Columns";

const Boardcontent = () => {
    return (
        <>
            <div className='board-columns'>
                <Columns />
                <Columns />
                <Columns />
                <Columns />
                <Columns />
                <Columns />
            </div>
        </>
    )
}

export default Boardcontent;