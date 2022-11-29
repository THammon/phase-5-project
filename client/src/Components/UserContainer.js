import NewFieldForm from "./NewFieldForm";

function UserContainer({fields, addNewFields, deleteField, user, rivalries, conferences, addNewConf, addNewRival, beenTo, wantToGo}){

    return(
        <div>
            <div className="textBar">{`Welcome ${user.first_name}`}</div>
            <div className="textBar">Stadiums I Have Been Too</div>
            <div className="beenTo">{beenTo.map(field => <div>{field.field_name} <img alt={field.field_name} src = {field.field_image}/></div>)}</div>
            <div className="textBar">Stadiums I Want To Go Too</div>
            <div className="wantToGo">{wantToGo.map(field => <div>{field.field_name} <img alt={field.field_name} src = {field.field_image}/></div>)}</div>
            <NewFieldForm addNewFields={addNewFields} user={user} rivalries={rivalries} conferences={conferences} addNewConf={addNewConf} addNewRival={addNewRival}/>
        </div>
    )
}
export default UserContainer;