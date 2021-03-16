import './App.css';

import AsideLeft from './AsideLeft.js'
import AsideRight from './AsideRight.js'

function App() {
  return (
    <div className="App">
        <div classNameq="container-fuild">
          <div className="row">
            <AsideLeft />
            <AsideRight />
          </div>
        </div>
    </div>
  );
}

export default App;
