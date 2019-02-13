// Render the cards using React!
const App = (props) => {
    let { cards } = props;

    return cards.map((card) => {
        let cardURL = `cards/${card.value}${card.suit}.png`

        return (
            <img style={{width: 80}} src={cardURL}/>
        )
    })
}

// CHALLENGE: Write a separate Card component for use in the App component
// TIP: Use props to pass the suit and number to each Card component
const Card = null;  

