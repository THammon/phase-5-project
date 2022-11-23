import FieldContainer from "./FieldContainer";

function ConferenceCard({conference, rivalries, stadiums}){

    return(
        <div>
            <div><FieldContainer rivalries={rivalries} stadiums={stadiums}/></div>
            <div>{`${conference.name}`}</div>
            <div>{`${conference.image}`}</div>
        </div>
    )
}
export default ConferenceCard;