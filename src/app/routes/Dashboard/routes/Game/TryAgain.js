import Button from "shared/components/Button";

export default function TryAgain({setGameOver}) {

    const handleClick = () => {
        setGameOver(false)
    }

  return (
    <div>
      <Button onClick={handleClick} className="btn-success">Try Again</Button>
    </div>
  );
}
