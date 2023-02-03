# Flashcard-O-Matic | A Flashcard Study App
The flashcard study app is a frontend study aid where students can create, edit, delete, and study from various decks of flashcards.

## Installation
1. Fork and clone this repository
2. Run `npm install` to install local dependencies
3. Run `npm run start` to start the application

## Technologies
Javascript, React with React hooks, Bootstrap 4, HTML, CSS

![javascript logo](/images/JavaScript.png)
![react logo](/images/React.png)
![bootstrap logo](/images/bootstrap.png)
![html logo](/images/html.png)
![css logo](/images/css.png)

## Overview
The Flashcard-O-Matic app was created primarily using React and was my first multi-route project to utilize React hooks. Each page, besides the home page, utilizes a breadcrumb navigation bar that will allow users to navigate to the current page's parent component.

### Home Page
This is the main page of the app and includes the following functions:
- `Create Deck`: Directs users to the Create Deck page
- `View Deck`: Directs users to the View Deck page for the selected deck
- `Study Deck`: Directs users to the Study Deck page for the selected deck
- `Delete Deck`: Represented as a trashcan and allows users to permanently delete the deck. When selected, the user is shown a message by the browser: "Delete this Deck? You will not be able to recover it." to confirm deletion.

![home page](/images/homepage.png)

### Create Deck
This page allows the user to create a new deck of flashcards. In order to submit the deck, a Name and Description of the deck is required.

The user can choose to `Cancel` the deck, which will direct the user back to the home screen, or they can `Submit` the deck, which will direct the user to the deck's View Deck page.

![create deck](/images/createDeck.png)

### View Deck
This page allows the users to view and make changes to the deck of flashcards. This page allows the users to `Edit`, `Study`, `Add Cards`, and `Delete` the deck. It also allows the users to `Edit` and `Delete` each card within the deck. 

When either `Delete` button is clicked, the user is prompted by the browser to confirm their selection before continuing with the deletion.

![view deck](/images/viewDeck.png)
<!-- Be sure to explain the delete card button -->

### Edit Deck
This page is similar to the Create Deck page, but it allows the user to edit the Name and Description of a selected deck.

![edit deck](/images/editDeck.png)

### Add Card
This page allows the user to create a new card to study from. The user is required to include a Front and Back of the card. 

When the user completes the forms and selects `Save`, the card is added to the deck and they are prompted to create a new card. When the user selects `Done`, they are directed back to the View Deck page.

![add card](/images/addCard.png)

### Edit Card
This is similar to the Add Card page, but it allows the user to make edits to a specific card instead of creating new cards for the deck. The `Save` button saves the changes, while the `Done` button will cancel the changes made to the card.

![edit card](/images/editCard.png)

### Study
This page allows the users to study from the flashcards they created and has the following functionalities:

- `Flip`: Will flip the card between the Front and Back of the card for the users to study from
- `Next`: While on the Back of the card, allows the users to study the next card in their list.

When the user finishes the final card in the deck, they will be prompted by the browser to either restart the deck, or to cancel their studying and return to the Home Page.

![study deck](/images/study.png)
