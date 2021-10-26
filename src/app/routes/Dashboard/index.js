import { Switch, Route } from "react-router-dom";
import Game from "./routes/Game";
import Welcome from "./routes/Welcome";

export default function Dashboard() {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/game" component={Game} />
    </Switch>
  );
}
