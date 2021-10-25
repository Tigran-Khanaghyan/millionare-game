import { Switch, Route } from "react-router-dom"
import Dashboard from "./routes/Dashboard"

export default function App() {
    return (
        <Switch>
            <Route path='/' component={Dashboard}/>
        </Switch>
    )
}
