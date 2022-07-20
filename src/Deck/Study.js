import React, { useEffect, useState } from "react";
import { readDeck } from "../utils/api";
import { useParams } from "react-router-dom";
import CardList from "../Cards/CardList";


function Study() {
    const [deck, setDeck] = useState({});
    const [cards, setCards] = useState([]);
    const [cardCount, setCardCount] = useState(0);
    const { deckId } = useParams();

    useEffect(() => {
        const cardAbort = new AbortController();

        async function showCard() {
            try {
                const cardList = await readDeck(deckId, cardAbort.signal);
                setDeck(cardList);
                setCardCount(cardList.cards.length)
                setCards(cardList.cards)
            }
            catch (error) {
                console.log("error creating card list");
            }
            return () => {
                cardAbort.abort();
            }
        }

        showCard();
    }, [deckId])

    // console.log(deck);
    // console.log(cardCount);
    // console.log(deck.cards);

    return (
        <div>
            <h3>{deck.name}: Study</h3>
            <div> <CardList deck={deck} cardCount={cardCount} cards={cards}/> </div>
        </div>
    )
}

export default Study;