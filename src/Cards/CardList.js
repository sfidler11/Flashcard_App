import React, { useState } from "react";

function CardList({deck, cardCount}){
    const [index, setIndex] = useState(1);
    const [flipSide, setFlipSide] = useState(false);
    
    console.log(cardCount);
    return (
        <div className="card-body">
            <div className="card-title">
                <h4>Card {index} of {cardCount}</h4>
            </div>
        </div>
    )

}

export default CardList;