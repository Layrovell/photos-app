import './App.scss';
import './styles/reset.scss';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Home} from "./components/Home/Home";
import {Characters} from "./components/Characters/Characters";
import {Episodes} from "./components/Episodes/Episodes";
import {Locations} from "./components/Locations/Locations";
import {WatchList} from "./components/WatchList/WatchList";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav">
          <ul className="nav__list">
            <Link to="/home" className="nav__item">Home</Link>
            <Link to="/characters" className="nav__item">Characters</Link>
            <Link to="/episodes" className="nav__item">Episodes</Link>
            <Link to="/locations" className="nav__item">Locations</Link>
            <Link to="/watchlist" className="nav__item">My watch list</Link>
          </ul>
        </nav>

        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/characters">
            <Characters/>
          </Route>
          <Route path="/episodes">
            <Episodes/>
          </Route>
          <Route path="/locations">
            <Locations/>
          </Route>
          <Route path="/watchlist">
            <WatchList/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
