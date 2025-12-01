import { useEffect, useState } from "react";
import "../styles/App.scss";
import questionMark from "../images/signo-de-interrogacion.png"
import nigiri from "../images/nigiris.png"
import ramen from "../images/ramen.png"
import sushi from "../images/sushi.png"

const images = [
  { id: "nigiri", img: nigiri, alt: "icono de nigiri" },
  { id: "ramen", img: ramen, alt: "icono de ramen" },
  { id: "sushi", img: sushi, alt: "icono de sushi" },
];

function App() {
  const generatedBoard = () =>
    [...images, ...images]
      .map((item) => ({
        id: item.id + "-" + Math.random(),
        img: item.img,
        alt: item.alt,
        class: "",
      }))
      .sort(() => Math.random() - 0.5);

  const [boardCards, setBoardCards] = useState(generatedBoard());
  const [moves, setMoves] = useState(0);
  const [hasWon, setHasWon] = useState(false);
  const [hasLost, setHasLost] = useState(false);

  const MAX_MOVES = 6;

  const checkCards = () => {
    // Localizar las cartas ya volteadas
    const [card1, card2] = boardCards.filter(
      (card) => card.class === "reversed"
    );

    if (card1.img === card2.img) {
      // Son iguales

      card1.class = "solved";
      card2.class = "solved";
    } else {
      card1.class = "";
      card2.class = "";
    }

    setBoardCards([...boardCards]);
    setMoves((move) => {
      const newMoves = move + 1;
      if (newMoves >= MAX_MOVES && !hasWon) {
        setHasLost(true);
      }
      return newMoves;
    });
  };

  const handleClick = (ev) => {
    if (hasWon) return; //no permitir clicks tras victoria
    if (hasLost) return; //o derrota

    // Localizar las cartas ya volteadas
    const reversedCards = boardCards.filter(
      (card) => card.class === "reversed"
    );

    if (reversedCards.length >= 2) {
      return;
    }
    //1. Localizar la carta
    const cardId = ev.currentTarget.id;
    const clickedCard = boardCards.find((card) => card.id === cardId);

    //2. Cambiar el obj de esa carta
    if (!clickedCard || clickedCard.class === "reversed") return;
    clickedCard.class = "reversed";

    //3. Guardar una copia del array de datos en la variable de estado
    setBoardCards([...boardCards]);

    // Si en este evento ya había una carta volteada
    // y le acabamos de dar la vuelta a la otra

    if (reversedCards.length === 1) {
      setTimeout(checkCards, 1000);
    }
  };

  // Detectar si todas están resueltas
  useEffect(() => {
    const solvedCount = boardCards.filter(
      (card) => card.class === "solved"
    ).length;
    if (solvedCount === boardCards.length && boardCards.length > 0) {
      setHasWon(true);
    }
  }, [boardCards]);

  // RESET

  const resetGame = () => {
    setBoardCards(generatedBoard());
    setMoves(0);
    setHasWon(false);
    setHasLost(false);
  };
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Juego de memoria</h1>
        <div className="hud">
          <p className="moves">Intentos: {moves}</p>
          <button className="reset-btn" onClick={resetGame}>
            Reiniciar
          </button>
        </div>
        {hasWon && <p className="win-message">¡Has ganado!</p>}
        {hasLost && (
          <p className="lose-message">¡Has perdido!</p>
        )}

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
                <img className="card-img" src={questionMark} alt="signo-de-interrogacion" />
              </div>

              <div className="back">
                <img className="card-img" src={cardObj.img} alt={cardObj.alt} />
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
