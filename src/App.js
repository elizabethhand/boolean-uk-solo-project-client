import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Homepage from "./pages/Homepage"

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home">
            </Redirect>
          </Route>
          <Route path="/home">
            <Homepage />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
