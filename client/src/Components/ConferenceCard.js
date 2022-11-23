import StadiumContainer from "./StadiumContainer";

function ConferenceCard({conference, rivalries, stadiums}){

    return(
        <div>
            <div><StadiumContainer rivalries={rivalries} stadiums={stadiums}/></div>
            <div>{`${conference.name}`}</div>
            <div>{`${conference.image}`}</div>
        </div>
    )
}
export default ConferenceCard;