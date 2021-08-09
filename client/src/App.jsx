import "./app.scss"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route type="/series">
          <Home type="series"/>
        </Route>
        <Route type="/movies">
          <Home type="movies"/>
        </Route>
      </Switch>
    </Router>
  );
};;


export default App;