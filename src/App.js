import './App.css';
import Phrase from  "./Phrase.js"
import PrivateKey from  "./PrivateKey.js"
import {BrowserRouter, Route, Switch} from "react-router-dom";




function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Switch>
            <Route path="/cutOff1">
              <Phrase />
            </Route>
            <Route path="/cutOff2">
              <PrivateKey/>
            </Route>
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
