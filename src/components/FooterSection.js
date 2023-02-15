import classes from "./FooterSection.module.css";
import { players } from "../utils/config";

function FooterSection({ gameWinner, finished }) {
  return (
    <footer className={`grid grid__three-cols ${classes["names-box"]}`}>
      <div
        className={`${classes["name-machine"]} ${finished ? "bolder" : ""} ${
          gameWinner === "machine" ? classes["game-winner"] : ""
        }`}
      >
        {players[11]}
      </div>
      <div
        className={`${classes["name-human"]} ${finished ? "bolder" : ""} ${
          gameWinner === "human" ? classes["game-winner"] : ""
        }`}
      >
        {players[22]}
      </div>
    </footer>
  );
}

export default FooterSection;
