import logo from "assets/images/logo.png";

export default function GameBoard({
  questions,
  questionIndex,
  setQuestionIndex,
}) {
  const handleClick = (index) => {
    if (index === questions[questionIndex].rightAnswer) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  return (
    <div className="game">
      <div>
        <img src={logo} alt="Millionare game logo" width="400" height="400" />
      </div>
      <div>
        <div>
          <p className="text-light">{questions[questionIndex].question}</p>
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
