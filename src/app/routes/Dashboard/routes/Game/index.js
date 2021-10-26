import { useState } from "react";
import MainLayout from "shared/components/MainLayout";
import GameBoard from "./GameBoard";
import GameInfo from "./GameInfo";
import QuestionForm from "./QuestionForm";

export default function Game() {
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <MainLayout
      left={<QuestionForm />}
      center={
        <GameBoard
          questionIndex={questionIndex}
          setQuestionIndex={setQuestionIndex}
        />
      }
      right={<GameInfo questionIndex={questionIndex} />}
    />
  );
}
