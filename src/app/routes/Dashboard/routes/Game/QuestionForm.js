import Input from "shared/components/Input";
import Button from "shared/components/Button";
import { useRef, useState } from "react";

export default function QuestionForm() {
  const [form, setForm] = useState({
    question: "",
    rightAnswer: null,
    answers: new Array(4).fill(""),
  });

  const boxRef = useRef({
    box: null,
    input: null,
  });

  const handleQuestion = (event) => {
    setForm((prev) => ({ ...prev, question: event.target.value }));
  };

  
  const handleCheckbox = (event) => {
    boxRef.current.box = event.target.checked
    console.log(boxRef)
  };


  return (
    <div>
      <p className="text-light">Type a Question</p>
      <div>
        <Input onChange={handleQuestion} value={form.question} type="text" />
      </div>
      {form.answers.map((answer, index) => {
        return (
          <div className="checkbox" key={index}>
            <Input ref={boxRef.box} type="checkbox" onChange={handleCheckbox} />
            <Input type="text" />
          </div>
        );
      })}

      <Button className="btn-success" children="Add" />
    </div>
  );
}
