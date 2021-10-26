import { useHistory } from "react-router-dom";
import Button from "../../../../../shared/components/Button";

export default function Content() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/game");
  };

  return (
    <div className="welcome">
      <p className="h2">Welcome to Millionare game</p>
      <Button className="btn-success" onClick={handleClick}>
        Play Game
      </Button>
    </div>
  );
}
