import FieldCard from "./FieldCard";

function FieldContainer({rivalries, fields}){

    return(
        <div>
            {fields?.map(field => <FieldCard {...field} field={field} key={field.id} rivalries={rivalries}/>)}
        </div>
    )
}
export default FieldContainer;