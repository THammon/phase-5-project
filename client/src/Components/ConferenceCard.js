import FieldContainer from "./FieldContainer";

function ConferenceCard({conference, rivalries, field}){

    return(
        <div>
            <div><FieldContainer rivalries={rivalries} field={field}/></div>
            <img className="pubPlantCard" alt="test" src={conference.image}/>
        </div>
    )
}
export default ConferenceCard;