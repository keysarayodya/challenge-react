import "./index.css";
import Form from "./Form";
import Home from "./Home";
import User from "./User";
import Book from "./Book";
import Transactions from "./Transactions";
import ProtectedRoute from "./ProtectedRoute";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [isAuth, setAuth] = useState(false);

  return (
    <Router>
      <div className="App">
        <div className="form">
          <Switch>
            <Route exact path="/login">
              <Form isAuth={isAuth} setAuth={setAuth} />
            </Route>
            <Route>
              <ProtectedRoute path="/" component={SecondApp} isAuth={isAuth} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function SecondApp() {
  return (
    <div className="App">
      <div className="form">
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/transactions">
            <Transactions />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/book">
            <Book />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
