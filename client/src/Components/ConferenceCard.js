import FieldContainer from "./FieldContainer";

function ConferenceCard({conference, rivalries, stadiums}){

    return(
        <div>
            <div><FieldContainer rivalries={rivalries} stadiums={stadiums}/></div>
            <div>{`${conference.name}`}</div>
            <img className="pubPlantPic" alt="test" src={conference.image}/>
        </div>
    )
}
export default ConferenceCard;