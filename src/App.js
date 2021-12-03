import "./index.css";
import Login from "./Login";
import Home from "./Home";
import User from "./User";
import Book from "./Book";
import FormFood from "./FormFood";
import Dashboard from "./Dashboard";
import Transactions from "./Transactions";
import ProtectedRoute from "./ProtectedRoute";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [isAuth, setAuth] = useState(false);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <Login isAuth={isAuth} setAuth={setAuth} />
          </Route>
          <Route>
            <ProtectedRoute path="/home" component={Home} isAuth={isAuth} />
            <ProtectedRoute
              path="/transactions"
              component={Transactions}
              isAuth={isAuth}
            />
            <ProtectedRoute path="/user" component={User} isAuth={isAuth} />
          </Route>
        </Switch>
        <Route path="/book">
          <Book />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/formFood">
          <FormFood />
        </Route>
      </div>
    </Router>
  );
}

// function SecondApp() {
//   return (
//     <div className="App">
//       <div className="form">
//         <Switch>
//           <Route exact path="/home">
//             <Home />
//           </Route>
//           <Route path="/transactions">
//             <Transactions />
//           </Route>
//           <Route path="/user">
//             <User />
//           </Route>
//         </Switch>
//       </div>
//     </div>
//   );
// }

export default App;
