import "../pages/CSS/PledgePage.css";
import CreatePledge from "../components/CreatePledge";
import leftWing from '../images/leftWing.png';
import rightWing from '../images/rightWing.png';
    
    
function Pledge() {
    return (
        <div>             
            <img src={leftWing} className="wing left-wing" />
            <img src={rightWing} className="wing right-wing"/>
        <div className="pledge-container">
        <CreatePledge />
        </div>
        </div>        
    ) 
}

export default Pledge

