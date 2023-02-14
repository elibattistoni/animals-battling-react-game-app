import classes from "./Header.module.css";

function Header({ resetGame }) {
  const styleHeader = `grid grid__three-cols ${classes.header}`;
  return (
    <header className={styleHeader}>
      <h1 className={classes.title}>DINOSAURS GAME</h1>
      <button className={classes["btn-new-game"]} onClick={resetGame}>
        New Game
      </button>
    </header>
  );
}

export default Header;
