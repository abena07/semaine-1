import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import LogIn from "./components/LogIn";
import NavBar from './components/NavBar';
import SignUp from './components/SignUp'


function App() {
  return (
    <div className="App">
      <Router>
         <NavBar/>
        <Switch>
          <Route exact path="/signup" component={SignUp}/>
          <Route path="/login" component={LogIn}/>
          
        </Switch>
       


         </Router>
    </div>
  );
}

export default App;
