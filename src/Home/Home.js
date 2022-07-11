import React from "react";
import CreateDeck from "../CreateDeck/CreateDeck";
import { Link, Route, Switch } from "react-router-dom";

function Home() {
    return (
    <div>
        <Link to="/decks/new" >
            <button className="btn btn-secondary"> + Create Deck </button>
        </Link>
    <Switch>
        <Route path="/decks/new" >
            <CreateDeck />
        </Route>
    </Switch>
    </div>
    )
}

export default Home;