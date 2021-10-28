import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MainLayout from "shared/components/MainLayout";
import { getRandomIndex } from "utils/getRandomIndex";
import Congratulation from "./Congratulation";
import GameBoard from "./GameBoard";
import GameInfo from "./GameInfo";
import QuestionForm from "./QuestionForm";
import TryAgain from "./TryAgain";

export default function Game() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [help, setHelp] = useState(false);

  const store = useSelector((state) => state);
  const questions = store.questions;

  useEffect(() => {
    const answers = document.querySelectorAll(".game-answer");
    const rightAnswer = questions[questionIndex].rightAnswer;
    let randomindex = getRandomIndex(0, answers.length, rightAnswer);
    if (help) {
      answers.forEach((answer, index) => {
        if (index !== rightAnswer && index !== randomindex) {
          answer.classList.add("hide-answer");
        }
      });
    } else {
      answers.forEach((answer) => {
        answer.classList.remove("hide-answer");
      });
    }
  });

  return (
    <MainLayout
      left={<QuestionForm />}
      center={
        gameOver ? (
          <TryAgain setGameOver={setGameOver} />
        ) : win ? (
          <Congratulation setWin={setWin} setQuestionIndex={setQuestionIndex} />
        ) : (
          <GameBoard
            setGameOver={setGameOver}
            questions={questions}
            questionIndex={questionIndex}
            setQuestionIndex={setQuestionIndex}
            setHelp={setHelp}
            setWin={setWin}
          />
        )
      }
      right={<GameInfo questionIndex={questionIndex} setHelp={setHelp} />}
    />
  );
}
