import apexContext from '../Context/Apex';
import { useContext,React,useState,useEffect} from 'react';

const Display = () => {
    const {legendsdata,setLegends,username,platform} = useContext(apexContext);
    const [gamename,setGamename] = useState("Loading Data");
    const [level,setLevel] = useState(0);
    const [rank,setRank] = useState({"data":"loading"});
    const [arena,setArena] = useState({"data":"loading"});
    const [globaldata,setGlobal] = useState({});
    useEffect(() => {
      
        fetch(`https://api.mozambiquehe.re/bridge?version=5&platform=${platform}&player=${username}&auth=qvfFPLGYUIjaBYWYwslX`)
            .then(response => response.json())
            .then(response => {
                setLegends(response);
                setGlobal(response.global);
                setGamename(response.global.name);
                setLevel(response.global.level);
                setRank(response.global.rank);
                setArena(response.global.arena);
            })
    },[]);
    return (
        <div style={{fontFamily:'Aldrich,sans-serif',marginLeft:'23%'}}>
        <div class="grid-container">
        <div class="grid-item">BR:Rank</div>
  <div class="grid-item"><img src={rank.rankImg} alt="Rank"></img></div>
  <div class="grid-item"> {rank.rankName} {rank.rankDiv}</div>
  <div class="grid-item">Score: {rank.rankScore}</div>
  <div class="grid-item">Split: {rank.rankedSeason}</div>   
</div>
<div class="grid-container-mid">
<div class="grid-item"><img src={globaldata.avatar} alt="ProfilePic" style={{width:'200px',height:'auto'}}></img></div>
  <div class="grid-item">IGN: {gamename}</div>
  <div class="grid-item">Level: {level}</div>
  <div class="grid-item">Platform: {globaldata.platform}</div>   
</div>
<div class="grid-container-right">
<div class="grid-item">Arena:Rank</div>
  <div class="grid-item"><img src={arena.rankImg} alt="Rank"></img></div>
  <div class="grid-item"> {arena.rankName} {arena.rankDiv}</div>
  <div class="grid-item">Score: {arena.rankScore}</div>
  <div class="grid-item">Split: {arena.rankedSeason}</div>   
  </div>
</div>
    )
}

export default Display
