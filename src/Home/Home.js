import React from "react";
import DeckList from "./DeckList";
import { Link, } from "react-router-dom";

function Home() {
    return (
    <div>
        <Link to={"/decks/new"} >
            <button className="btn btn-secondary"> + Create Deck </button>
        </Link>
        
        <DeckList />
    </div>
    )
}

export default Home;