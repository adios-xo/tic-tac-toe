import React from "react";

const Square = (prop) => {
    return (
        <div onClick={prop.onClick} className="square">
            <h1>{prop.value}</h1>
        </div>
    );
}

export default Square;