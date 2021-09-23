import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Homepage from "./pages/Homepage"
import Header from "./pages/Header"
import Register from "./pages/RegisterPage"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home">
            </Redirect>
          </Route>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
