import ConferenceCard from "./ConferenceCard";
// import { NavLink } from "react-router-dom";

function ConferenceContainer({conferences}){

    return(
        <div>
            {/* <div>
                <NavLink className={"navbtn"}  to="/SEC">SEC</NavLink>
                <NavLink className={"navbtn"}  to="/ACC">ACC</NavLink>
                <NavLink className={"navbtn"}  to="/Big10">Big10</NavLink>
                <NavLink className={"navbtn"}  to="/Big12">Big12</NavLink>
                <NavLink className={"navbtn"}  to="/Pac12">Pac12</NavLink>
            </div> */}
            <div className="conContainer">
            {conferences?.map(conference => <ConferenceCard {...conference} conference={conference} key={conference.id} />)}
            
            </div>
        </div>
    )
}
export default ConferenceContainer;