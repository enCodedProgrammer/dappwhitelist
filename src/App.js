import './App.css';
import Home from "./Home.js"
import Header from "./Header.js"
import {BrowserRouter, Route, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Route path="/connect" component={Home} exact />
        <Route path="/connect/fuse/wallet/:wallet" component={Header} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
