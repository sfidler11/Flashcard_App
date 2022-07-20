import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { listDecks } from "../utils/api";

function DeckList() {
    const [decks, setDecks] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const deckAbort =  new AbortController();

        async function decksList() {
            try {
                const list = await listDecks(deckAbort.signal);
                setDecks(list);
            }
            catch (error) {
                console.log("error creating deck list");
            }
            return () => {
                deckAbort.abort();
            };
        }

        decksList();
    }, [])

    const printList = decks.map((deck) => {
        
        return (
            <div class="border rounded p-2 my-2">
                <div>
                    <h3>{deck.name}
                    <small class="float-right">{deck.cards.length} cards</small></h3>
                </div>
                <div>
                    <p>{deck.description}</p>
                </div>
                <div>
                    <button class="btn btn-secondary mx-1" onClick={() => history.push(`/decks/${deck.id}`)}>
                        <span className="oi oi-eye mx-1"></span>
                        View
                    </button>
                    <button class="btn btn-primary" onClick={() => history.push(`/decks/${deck.id}/study`)}>
                        <span className="oi oi-book mx-1"></span>
                        Study
                    </button>
                    <button class="btn btn-danger float-right">
                        <span className="oi oi-trash"></span>
                    </button>
                </div>
            </div>
        )
    })

    return (
        <>
            {printList}
        </>
    )
}

export default DeckList;