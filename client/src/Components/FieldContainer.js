import FieldCard from "./FieldCard";
import Search from "./Search";
import {useParams} from "react-router-dom";

function FieldContainer({rivalries, fields, setSearch, beenTo, setBeenTo, wantToGo, setWantToGo}){

    const {conference} = useParams()
    const conferenceFields = fields.filter((field) => field.conference.name === conference)
    
    return(
        <div>
            <Search setSearch={setSearch}/>
            {conferenceFields?.map(field => <FieldCard {...field} field={field} key={field.id} rivalries={rivalries} beenTo={beenTo} wantToGo={wantToGo} setBeenTo={setBeenTo} setWantToGo={setWantToGo}/>)}
            {/* {console.log(fields)} */}
        </div>
    )
}
export default FieldContainer;