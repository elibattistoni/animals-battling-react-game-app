function ScoresSection({ finished, scoreHuman, scoreMachine }) {
  return (
    <section className="grid grid__three-cols score-box">
      <div className={`score-machine ${finished ? "bolder-machine" : ""}`}>
        {scoreMachine}
      </div>
      <div className={`score-human ${finished ? "bolder-human" : ""}`}>
        {scoreHuman}
      </div>
    </section>
  );
}

export default ScoresSection;
