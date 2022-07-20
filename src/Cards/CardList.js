import React, { useState } from "react";

function CardList({deck, cardCount, cards}){
    const [index, setIndex] = useState(0);
    const [flipSide, setFlipSide] = useState(false);
    
    console.log(cards[index]);
    return (
        <div className="card-body">
            <div className="card-title">
                <h4>Card {index + 1} of {cardCount}</h4>
                <p>front</p>
            </div>
        </div>
    )

}

export default CardList;