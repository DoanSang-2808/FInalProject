import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AsideLeft from './AsideLeft.js'
import AsideRight from './AsideRight.js'


function App() {
  return (
    <Router>
      <div className="App">
        <div classNameq="container-fuild">
          <div className="row">
            <AsideLeft />
            <Switch>
              <AsideRight />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
