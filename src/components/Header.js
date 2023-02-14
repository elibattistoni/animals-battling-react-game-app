function Header({ resetGame }) {
  return (
    <header className="grid grid__three-cols header">
      <h1 className="title">DINOSAURS GAME</h1>
      <button className="btn-new-game" onClick={resetGame}>
        New Game
      </button>
    </header>
  );
}

export default Header;
