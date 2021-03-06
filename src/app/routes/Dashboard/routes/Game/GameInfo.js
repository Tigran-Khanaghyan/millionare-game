import { useSelector } from "react-redux";

export default function GameInfo({ questionIndex, setHelp }) {
  const store = useSelector((state) => state);
  const questions = store.questions;

  const handleHelp = () => {
    setHelp(true);
  };

  return (
    <div className="info">
      <div className="info-help">
        <div onClick={handleHelp}>50/50</div>
      </div>
      <div className="info-queue">
        {questions.map((_, index) => {
          return (
            <div
              key={index}
              className={questionIndex === index ? "info-current" : null}
            >
              <p className="text-light">{index + 1}</p>
            </div>
          );
        })}
      </div>
      <div className="info-score">
        <div>Score: {questionIndex + 1}/15</div>
      </div>
    </div>
  );
}
