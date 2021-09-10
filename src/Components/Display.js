import apexContext from '../Context/Apex';
import { useContext,React,useState,useEffect} from 'react';

const Display = () => {
    const {setLegends,username,platform, setLegendsarray} = useContext(apexContext);
    const [gamename,setGamename] = useState("Loading Data");
    const [level,setLevel] = useState(0);
    const [rank,setRank] = useState({"data":"loading"});
    const [arena,setArena] = useState({"data":"loading"});
    const [globaldata,setGlobal] = useState({});
    useEffect(() => {
      
        fetch(`https://api.mozambiquehe.re/bridge?version=5&platform=${platform}&player=${username}&auth=qvfFPLGYUIjaBYWYwslX`)
            .then(response => response.json())
            .then(response => {
                if(!response.Error)
                {

                  setLegends(response);
                  setGlobal(response.global);
                  setGamename(response.global.name);
                  setLevel(response.global.level);
                  setRank(response.global.rank);
                  setArena(response.global.arena);
                  setLegendsarray(response.legends.all);}
            })
    },[]);
    return (
      <>
      
       { gamename !== "Loading Data"  ? <div style={{fontFamily:'Aldrich,sans-serif',marginLeft:'23%'}}>
        <div className="grid-container">
        <div className="grid-item">BR:Rank</div>
  <div className="grid-item"><img src={rank.rankImg} alt="Rank"></img></div>
  <div className="grid-item"> {rank.rankName} {rank.rankDiv}</div>
  <div className="grid-item">Score: {rank.rankScore}</div>
  <div className="grid-item">Split: {rank.rankedSeason}</div>   
</div>
<div   className="grid-container-mid">
<div   className="grid-item"><img src={globaldata.avatar} alt="ProfilePic" style={{width:'200px',height:'auto'}}></img></div>
  <div className="grid-item">IGN: {gamename}</div>
  <div className="grid-item">Level: {level}</div>
  <div className="grid-item">Platform: {globaldata.platform}</div>   
</div>
<div   className="grid-container-right">
<div   className="grid-item">Arena:Rank</div>
  <div className="grid-item"><img src={arena.rankImg} alt="Rank"></img></div>
  <div className="grid-item"> {arena.rankName} {arena.rankDiv}</div>
  <div className="grid-item">Score: {arena.rankScore}</div>
  <div className="grid-item">Split: {arena.rankedSeason}</div>   
  </div>
</div>: <h1>We Got No Information In our Database</h1>}</>
    )
}

export default Display
