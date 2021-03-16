import './App.css';
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
=======
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
>>>>>>> 6a9d2dd421469763fd28d9b3b79ed8c964dbc033
import AsideLeft from './AsideLeft.js'
import AsideRight from './AsideRight.js'


function App() {
  return (
    <Router>
      <div className="App">
<<<<<<< HEAD
        <div classNameq="container-fuild">
          <div className="row">
            <AsideLeft />
            <Switch>
              <AsideRight />
            </Switch>
          </div>
        </div>
=======
          <div classNameq="container-fuild">
            <div className="row">
              <AsideLeft />
              <Switch>
                <AsideRight />
              </Switch>
            </div>
          </div>
>>>>>>> 6a9d2dd421469763fd28d9b3b79ed8c964dbc033
      </div>
    </Router>
  );
}

export default App;
