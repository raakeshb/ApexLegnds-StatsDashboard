import Homepage from './Homepage';
import Header from './Header';
import Display from './Display';
import '../App.css';
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import apexContext from '../Context/Apex';

function App() {
  const [legendsdata,setLegends]= useState({"":""})
  const [force,setForce]= useState("");
  const [legendsarray, setLegendsarray] = useState({});
  const [platform,setPlatform] = useState("Platform");
  const [username,setusername] = useState("");
 

 


  
  return (
  <apexContext.Provider value={{legendsdata,setLegends,force,setForce,platform,setPlatform,username,setusername}}>
    <Router>
         <Switch>
            <Route exact path="/">
              <Header></Header>
              <Homepage/>
            </Route>
            <Route exact path="/display">
              <Header></Header>
              <Display/>
            </Route>
         </Switch>
    </Router>
  </apexContext.Provider>);
  
}

export default App;
