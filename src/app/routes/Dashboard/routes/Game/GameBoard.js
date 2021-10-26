import { useSelector } from "react-redux";
import logo from "assets/images/logo.png";

export default function GameBoard({ questionIndex, setQuestionIndex }) {
  const store = useSelector((state) => state);
  const questions = store.questions;

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
              <div onClick={handleClick.bind(null, index)}>
                <p className="text-light">{answer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
