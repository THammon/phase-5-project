import ConferenceCard from "./ConferenceCard";
import Search from "./Search";

function ConferenceContainer({conferences, rivalries, stadiums, setSearch}){

    return(
        <div>
            <Search setSearch={setSearch}/>
            <div>
            {conferences?.map(conference => <ConferenceCard {...conference} conference={conference} key={conference.id} rivalries={rivalries} stadiums={stadiums}/>)}
            </div>
        </div>
    )
}
export default ConferenceContainer;