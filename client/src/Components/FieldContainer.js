import FieldCard from "./FieldCard";

function FieldContainer({rivalries, stadiums}){

    return(
        <div>
            {stadiums?.map(stadium => <FieldCard {...stadium} stadium={stadium} key={stadium.id} rivalries={rivalries}/>)}
        </div>
    )
}
export default FieldContainer;