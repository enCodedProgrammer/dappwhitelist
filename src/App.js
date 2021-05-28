import './App.css';
import Phrase from  "./Phrase.js"
import PrivateKey from  "./PrivateKey.js"
import {BrowserRouter, Route, Switch} from "react-router-dom";




function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Switch>
            <Route path="/phrase">
              <Phrase />
            </Route>
            <Route path="/privateKey">
              <PrivateKey/>
            </Route>
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
