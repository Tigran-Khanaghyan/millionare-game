import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MainLayout from "shared/components/MainLayout";
import { getRandomIndex } from "utils/getRandomIndex";
import GameBoard from "./GameBoard";
import GameInfo from "./GameInfo";
import QuestionForm from "./QuestionForm";

export default function Game() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [help, setHelp] = useState(false);

  const store = useSelector((state) => state);
  const questions = store.questions;

  useEffect(() => {
    if (help) {
      const answers = document.querySelectorAll(".game-answer");
      const rightAnswer = questions[questionIndex].rightAnswer;
      let randomindex = getRandomIndex(0, answers.length, rightAnswer);
      answers.forEach((answer, index) => {
        if (index !== rightAnswer && index !== randomindex) {
          answer.classList.add("hide-answer");
        }
      });
    }
    // eslint-disable-next-line
  }, [help]);

  return (
    <MainLayout
      left={<QuestionForm />}
      center={
        <GameBoard
          questions={questions}
          questionIndex={questionIndex}
          setQuestionIndex={setQuestionIndex}
          help={help}
        />
      }
      right={<GameInfo questionIndex={questionIndex} setHelp={setHelp} />}
    />
  );
}
