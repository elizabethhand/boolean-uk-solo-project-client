import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Homepage from "./pages/Homepage"
import Header from "./pages/Header"
import Register from "./pages/RegisterPage"
import CafeDisplayPage from "./pages/CafeDisplayPage"
import LoginPage from "./pages/LoginPage"

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
        <Route path="/cafe">
          <CafeDisplayPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </main>
    </div>
  );
}

export default App;
