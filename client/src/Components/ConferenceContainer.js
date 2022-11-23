import ConferenceCard from "./ConferenceCard";
import Search from "./Search";

function ConferenceContainer({conferences, rivalries, field, setSearch}){

    return(
        <div>
            <Search setSearch={setSearch}/>
            <div className="truePlantCon">
            {conferences?.map(conference => <ConferenceCard {...conference} conference={conference} key={conference.id} rivalries={rivalries} field={field}/>)}
            </div>
        </div>
    )
}
export default ConferenceContainer;