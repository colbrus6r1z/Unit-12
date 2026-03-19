//Part 1: Jokes API
async function getRandomJoke() {
    try {
        const response = await axios.get("https://official-joke-api.appspot.com/jokes/random");
        console.log("Random Joke:", response.data.setup, response.data.punchline);
    }
    catch (error) {
        console.error("Error fetching random joke:", error);
    }
}

async function getTenJokes() {
    try {
        const response = await axios.get("https://official-joke-api.appspot.com/jokes/random/10");
        console.log("Ten Jokes:");
        response.data.forEach(j => console.log(j.setup, "- ", j.punchline));
    }
    catch (error) {
        console.error("Error fetching ten jokes:", error);
    }
}

async function getProgrammingJokes() {
    try {
        const response = await axios.get("https://official-joke-api.appspot.com/jokes/programming/random");
        console.log("Programming Jokes:");
        response.data.forEach(j => console.log(j.setup, "- ", j.punchline));
    }
    catch (error) {
        console.error("Error fetching programming jokes:", error);
    }
}

async function getFourRandomJokes() {
    try {
        const requests = [
            axios.get("https://official-joke-api.appspot.com/random_joke"),
            axios.get("https://official-joke-api.appspot.com/random_joke"),
            axios.get("https://official-joke-api.appspot.com/random_joke"),
            axios.get("https://official-joke-api.appspot.com/random_joke")
        ];
        const results = await Promise.all(requests);
        console.log("Four Random Jokes:");
        results.forEach(result => console.log(result.data.setup, "- ", result.data.punchline));
    }
    catch (error) {
        console.error("Error fetching four random jokes:", error);
    }
}
async function logFiveJokes() {
    try {
        console.log("Five Jokes in a row:");
        for (let i = 0; i < 5; i++) {
            const response = await
            axios.get("https://official-joke-api.appspot.com/random_joke");
            console.log(response.data.setup, "- ", response.data.punchline);
        }
    }
    catch (error) {
        console.error("Error fetching five jokes:", error);
    }
}
//Part 2: Deck of Cards API
async function deckOfCardsDemo() {
    try {
        //Get a new shuffled deck
    const deckResponse = await 
    axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/");
    const deckId = deckResponse.data.deck_id;
    console.log("New Deck ID", deckId);
        //Draw One Card
    let response = await 
    axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    console.log("Single Drawn Card:", response.data.cards[0].value, "of", response.data.cards[0].suit);
        //Draw Five Cards
    response = await 
    axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`);
    console.log("Five Card Hand:", response.data.cards.map(card => `${card.value} of ${card.suit}`));
    //Shuffle Deck & Draw 2
    response = await 
    axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);    
    response = await 
    axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
    console.log("Shuffled Deck & Draw 2:", response.data.cards.map(card => `${card.value} of ${card.suit}`));
    //Create hands for 4 Players
    async function drawCards(deckId, count) {
        const response = await
            axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`);
        return response.data.cards;
    }
    console.log("Hands for 4 Players");
    for (let i=1; i<=4; i++){
        const hand = await drawCards (deckId, 5);
        console.log(`Player ${i}:`, hand.map(card => `${card.value} of ${card.suit}`).join(", "));
    }
    }
    catch (error) {
        console.error("Error occurred:", error);
    }
}
getRandomJoke();
getTenJokes();
getProgrammingJokes();
getFourRandomJokes();
logFiveJokes();
deckOfCardsDemo();