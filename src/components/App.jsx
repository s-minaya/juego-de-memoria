import "../styles/App.scss";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Juego de memoria</h1>
      </header>
      <main className="main">

        <ul className="board">
          <li className="card"><img className="card-img"src="/src/images/nigiris.png" alt="icono-de-nigiri" /></li>
          <li className="card"><img className="card-img"src="/src/images/onigiri.png" alt="icono-de-onigiri" /></li>
          <li className="card"><img className="card-img"src="/src/images/ramen.png" alt="icono-de-ramen" /></li>
          <li className="card"><img className="card-img"src="/src/images/sushi.png" alt="icono-de-sushi" /></li>
          <li className="card"><img className="card-img"src="/src/images/te-matcha.png" alt="icono-de-te-matcha" /></li>
          <li className="card"><img className="card-img"src="/src/images/tempura.png" alt="icono-de-tempura" /></li>
        </ul>
      </main>
    </div>
  );
}

export default App;
