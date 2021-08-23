import apexContext from '../Context/Apex';
import { useContext,React} from 'react';
import {
    Link,useHistory
  } from "react-router-dom";

const Homepage = () => {

    const {username,setusername,platform,setPlatform} = useContext(apexContext);
    let history = useHistory();

    function validation(){

        if(username==="" || platform==="Platform") {alert("Please Check whether Username and Platform has been entered");}
        else{
                history.push("/display");
        }
    }





    return (
        <div className="Platform-box">
             <p className="Searchbar-name" style={{fontFamily:'Aldrich,sans-serif'}}>Username</p>
        <input className="Searchbar" style={{fontFamily:'Aldrich,sans-serif'}} placeholder="IGN" onChange={(event)=>{setusername(event.target.value);}}></input>
        <Link className="Link" onClick={()=>{validation()}}>Search</Link>
        <br></br>
        <div className="dropdown">
                <button className="dropbtn">{platform}</button>
                        <div className="dropdown-content">
                            
                          <button onClick={()=>{setPlatform("PC");}}>PC</button>
                          <button onClick={()=>{setPlatform("X1");}}>X-Box</button>
                          <button onClick={()=>{setPlatform("PS4");}}>PlayStation</button>
                        </div>
        </div>
       
       

        </div>
    )
}

export default Homepage
