import Homepage from './Homepage';
import Header from './Header';
import Display from './Display';
import Legends from './Legends';
import '../App.css';
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import apexContext from '../Context/Apex';

function App() {
  const [legendsdata,setLegends]= useState({"data":"loading"})
  const [force,setForce]= useState("");
  const [legendsarray, setLegendsarray] = useState({"data":"loading"});
  const [platform,setPlatform] = useState("Platform");
  const [username,setusername] = useState("");
 

 


  
  return (
  <apexContext.Provider value={{legendsdata,setLegends,force,setForce,platform,setPlatform,username,setusername,legendsarray, setLegendsarray}}>
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
            <Route exact path="/legends">
              <Header></Header>
              <Legends></Legends>
            </Route>
         </Switch>
    </Router>
  </apexContext.Provider>);
  
}

export default App;
