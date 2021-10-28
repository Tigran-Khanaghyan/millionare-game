import Button from "shared/components/Button";

export default function Congratulation({setWin, setQuestionIndex}) {

    const handleClick = () => {
        setQuestionIndex(0)
        setWin(false)
    }

  return (
    <div className="congratulation">
      <p className='m-4'>Congratulations!!! You Win The Game!</p>
      <Button className="btn-success" children="Close" onClick={handleClick}/>
    </div>
  );
}
