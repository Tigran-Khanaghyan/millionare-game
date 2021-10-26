import Input from "shared/components/Input";
import Button from "shared/components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { onSetQuestions } from "../../actions";

const getInitialForm = () => {
  return {
    question: "",
    rightAnswer: null,
    answers: new Array(4).fill("").map((item) => (item = "")),
  };
};

export default function QuestionForm() {
  const [form, setForm] = useState(getInitialForm());

  const dispatch = useDispatch();

  const handleQuestion = (event) => {
    const tempForm = { ...form };
    tempForm.question = event.target.value;
    setForm(tempForm);
  };

  const handleRightAnswer = (index) => {
    const temp = { ...form };
    temp.rightAnswer = index;
    setForm(temp);
  };
  const handleAnswer = (index, event) => {
    const temp = { ...form };
    temp.answers[index] = event.target.value;
    setForm(temp);
  };
  const addQuestion = () => {
    dispatch(onSetQuestions(form));
    setForm(getInitialForm());
  };

  return (
    <div>
      <p className="text-light">Type a Question</p>
      <div>
        <Input onChange={handleQuestion} value={form.question} type="text" />
      </div>
      {form.answers.map((_, index) => {
        return (
          <div className="checkbox" key={index}>
            <Input
              type="checkbox"
              onChange={handleRightAnswer.bind(null, index)}
              checked={form.rightAnswer === index}
            />
            <Input
              type="text"
              onChange={handleAnswer.bind(null, index)}
              value={form.answers[index]}
            />
          </div>
        );
      })}

      <Button
        className="btn-success"
        children="Add Question"
        onClick={addQuestion}
      />
    </div>
  );
}
