import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { readDeck, createCard } from "../utils/api";



function AddCard() {
    const [deck, setDeck] = useState([]);
    const [front, setFront] = useState("");
    const [back, setBack] = useState("");
    const { deckId } = useParams();
    const history = useHistory();

    //initializes the front and back values of the card
    const handleFrontChange = (event) => setFront(event.target.value);
    const handleBackChange = (event) => setBack(event.target.value);

    //pulls the correct deck in order to add cards
    useEffect(() => {
        const deckAbort = new AbortController();
    
        async function loadDeck() {
            try{
                const pullDeck = await readDeck(deckId, deckAbort.signal);
                setDeck(pullDeck);
                //setCard(pullDeck.cards)
            }
            catch (error) {
                console.log("error creating deck list");
            }
    
            return () => {
                deckAbort.abort();
            }
        }
    
        loadDeck();
    }, [deckId])

    //when the form is saved, the card will be added to the deck and the user will be able to add new cards
    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(front, back)
        createCard(deckId, {
            front: front,
            back: back,
        });
        setFront("");
        setBack("");
    }
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <Link to="/">
                            <span className="oi oi-home mx-1"></span>
                            Home
                        </Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                        <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Add Card</li>
                </ol>
            </nav>
            <h3>{deck.name}: Add Card</h3>
            <div className="card-info">
                <form onSubmit={handleSubmit}> 
                    <div className="form-group">
                    <label htmlFor="front">Front</label>
                        <textarea 
                        className="form-control" 
                        id="front" 
                        rows="3" 
                        placeholder="Front side of card"
                        required
                        onChange={handleFrontChange}
                        value={front}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="back">Back</label>
                        <textarea 
                        className="form-control" 
                        id="back" 
                        rows="3" 
                        placeholder="Back side of card"
                        required
                        onChange={handleBackChange}
                        value={back}
                        ></textarea>
                    </div>
                    <button className="btn btn-secondary mx-1" onClick={() => history.push(`/decks/${deck.id}`)}>
                        Done
                    </button>
                    <button type="submit" className="btn btn-primary mx-1">
                        Save
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddCard;
