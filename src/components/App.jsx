import { useState } from "react";
import "../styles/App.scss";

const images = ["nigiris.png", "ramen.png", "sushi.png"]
const cards = [{
  id: 1,
  image: "nigiris.png",
  class: ""
},
{
  id: 2,
  image: "ramen.png",
  class: ""
},
{
  id: 3,
  image: "nigiris.png",
  class: ""
},
{
  id: 4,
  image: "nigiris.png",
  class: ""
},
{
  id: 5,
  image: "ramen.png",
  class: ""
},
{
  id: 6,
  image: "nigiris.png",
  class: ""
}
]

function App() {

  const [boardCards, setBoardCards] = useState(cards);

  const altTexts = {
    "nigiris.png": "icono de nigiri",
    "ramen.png": "icono de ramen",
    "sushi.png": "icono de sushi"
  };
  const checkCards = () => {
        // Localizar las cartas ya volteadas
   const [card1, card2] = boardCards.filter(card => card.class==="reversed");
   console.log({card1,card2});

   if(card1.image !== card2.image) {
    //No son iguales

    card1.class = "";
    card2.class ="";
   }
   else {
      card1.class = "solved";
    card2.class ="solved";

   }

   setBoardCards([...boardCards]);
   

  }

  const handleClick = (ev) => {

    // Localizar las cartas ya volteadas
   const reversedCards = boardCards.filter(card => card.class==="reversed")

   if (reversedCards.length >=2) {
    return;
   }
     //1. Localizar la carta
    const cardId = parseInt(ev.currentTarget.id);
    const clickedCard = boardCards.find((card) => card.id === cardId);

    console.log(clickedCard);

    //2. Cambiar el obj de esa carta
    clickedCard.class = "reversed";

    //3. Guardar una copia del array de datos en la variable de estado
    setBoardCards([...boardCards]);

    // Si en este evento ya había una carta volteada
    // y le acabamos de dar la vuelta a la otra

    if(reversedCards.length===1){
      setTimeout(checkCards, 1000);
    }

  }
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Juego de memoria</h1>
      </header>
      <main className="main">
        <ul className="board">
          {boardCards.map((cardObj) => (
            <li
              id={cardObj.id}
              key={cardObj.id}
              className={"card " + cardObj.class}
              onClick={handleClick}
            >
              <div className="front">
                <img
                  className="card-img"
                  src="/src/images/signo-de-interrogacion.png"
                  alt="signo-de-interrogacion"
                />
              </div>

              <div className="back">
                <img
                  className="card-img"
                  src={`/src/images/${cardObj.image}`}
                  alt={altTexts[cardObj.image]}
                />
              </div>
            </li>
          ))}


        </ul>
      </main>
    </div>
  );
}

export default App;
