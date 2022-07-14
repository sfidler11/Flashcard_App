import React from "react";
import { useState, useEffect } from "react";
import { listDecks } from "../utils/api";

function DeckList() {
    const [decks, setDecks] = useState([]);

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
            <div>
                <div>
                    <div>
                        <h3>{deck.name}</h3>
                    </div>
                </div>
            </div>
        )
    })

    console.log(printList);
    return (
        <>
            {printList}
        </>
    )
}

export default DeckList;