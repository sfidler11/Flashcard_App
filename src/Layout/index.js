import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Home/Home";
import CreateDeck from "../Deck/CreateDeck";
import Study from "../Deck/Study";
import EditDeck from "../Deck/EditDeck";
import Deck from "../Deck/Deck";
import AddCard from "../Cards/AddCard";

function Layout() {
  return (
    <>
    
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
             <Home />
          </Route>

          <Route path="/decks/new"> 
            <CreateDeck /> 
          </Route>

          <Route path="	/decks/:deckId"> 
            <Deck /> 
          </Route>

          <Route path="/decks/:deckId/study">
            <Study />
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          <Route>
            <NotFound />
          </Route> 
        </Switch>
      </div>
    </>
  );
}

export default Layout;
