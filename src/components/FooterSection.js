import { players } from "../utils/config";

function FooterSection({ gameWinner, finished }) {
  return (
    <footer className="grid grid__three-cols names-box">
      <div
        className={`name-machine ${finished ? "bolder-machine" : ""} ${
          gameWinner === "machine" ? "game-winner" : ""
        }`}
      >
        {players[11]}
      </div>
      <div
        className={`name-human ${finished ? "bolder-human" : ""} ${
          gameWinner === "human" ? "game-winner" : ""
        }`}
      >
        {players[22]}
      </div>
    </footer>
  );
}

export default FooterSection;
