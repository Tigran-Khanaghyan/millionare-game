import logo from "assets/images/logo.png";

export default function GameBoard({
  questions,
  questionIndex,
  setQuestionIndex,
  setGameOver,
  setHelp,
  setWin,
}) {
  const handleClick = (index, event) => {
    if (index === questions[questionIndex].rightAnswer) {
      if (questionIndex + 1 === questions.length) {
        setWin(true);
        return;
      }
      setTimeout(() => {
        setHelp(false);
        setQuestionIndex(questionIndex + 1);
      }, 1000);
    } else {
      setQuestionIndex(0);
      setGameOver(true);
    }
  };

  return (
    <div className="game">
      <div>
        <img src={logo} alt="Millionare game logo" width="400" height="400" />
      </div>
      <div className="game-board">
        <div className="game-question">
          <p className="h2 m-4 text-light">
            {questions[questionIndex].question}
          </p>
        </div>
        <div>
          {questions[questionIndex].answers.map((answer, index) => {
            return (
              <div
                key={index}
                onClick={handleClick.bind(null, index)}
                className="game-answer"
              >
                <p className="m-4 text-light">{answer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
