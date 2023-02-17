import classes from "./ScoresSection.module.css";

function ScoresSection({ finished, scoreHuman, scoreMachine }) {
  return (
    <section className={`grid grid__three-cols ${classes["score-box"]}`}>
      <div
        className={`${classes["score-machine"]} ${finished ? "bolder" : ""}`}
      >
        {scoreMachine}
      </div>
      <div className={`${classes["score-human"]} ${finished ? "bolder" : ""}`}>
        {scoreHuman}
      </div>
    </section>
  );
}

export default ScoresSection;
