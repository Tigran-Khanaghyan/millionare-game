import Input from "shared/components/Input";
import Button from "shared/components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { onSetQuestions } from "../../actions";

const getInitialForm = () => {
  return {
    question: "",
    rightAnswer: null,
    answers: new Array(4).fill(""),
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
    <div className='container'>
      <p className="text-light">Add a new Question</p>
      <div>
        <textarea
          onChange={handleQuestion}
          value={form.question}
          type='textarea'
          className="question"
        />
      </div>
      {form.answers.map((_, index) => {
        return (
          <div className="checkbox" key={index}>
            <div className="checkbox-check">
              <Input
                type="checkbox"
                onChange={handleRightAnswer.bind(null, index)}
                checked={form.rightAnswer === index}
              />
            </div>
            <Input
              className="checkbox-text"
              type="text"
              onChange={handleAnswer.bind(null, index)}
              value={form.answers[index]}
            />
          </div>
        );
      })}

      <Button
        className="btn-success add-question"
        children="Add Question"
        onClick={addQuestion}
      />
    </div>
  );
}
