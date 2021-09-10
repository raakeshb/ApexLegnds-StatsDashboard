import apexContext from '../Context/Apex';
import { useContext,React} from 'react';

const Legends = () => {
    const {legendsarray} = useContext(apexContext);
    
    return (
        
        <div   className="grid-container-legend">
            { Object.keys(legendsarray).length > 0 && Object.keys(legendsarray).filter((item)=>legendsarray[item].data).map(items=><div className="grid-item" style={{fontFamily:'Aldrich,sans-serif'}}><input type='image' style={{width:'300px',height:'auto'}} alt="Legends" src={legendsarray[items].ImgAssets.icon}></input>{items}</div>)}

 
</div>
        
            
      
    )
}

export default Legends
