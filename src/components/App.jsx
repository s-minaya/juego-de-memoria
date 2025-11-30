import { useState } from "react";
import "../styles/App.scss";

const images = ["nigiris.png", "ramen.png", "sushi.png"]

function App() {

  const [boardCards, setBoardCards] = useState(
    [...images, ...images]
    .map((image, index) => {
      return { image: image, status: "", id: index};
    })
    .sort(() => Math.random() - 0.5)
  );

  const handleClick = (ev) => {
   
    const index = ev.currentTarget.dataset.index;
    

    const updated = [...boardCards];
    updated[index].status = "reversed";
    setBoardCards(updated);
    
    

  }
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Juego de memoria</h1>
      </header>
      <main className="main">
        <ul className="board">
          {boardCards.map((card, index) => (
            <li 
            className={`card ${card.status}`}
            data-index={index} 
            key={card.id} 
            onClick={handleClick}>
              <div className="front">
                <img
                  className="card-img "
                  src="/src/images/signo-de-interrogacion.png"
                  alt="signo-de-interrogacion"
                />
              </div>
              <div className="back">
                <img
                  className="card-img"
                  src={`/src/images/${card.image}`}
                  alt="icono-de-nigiri"
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
