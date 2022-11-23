import NewFieldForm from "./NewFieldForm";

function UserContainer({addNewField, user}){

    return(
        <div>
            <div className="textBar">{`Welcome ${user.first_name}`}</div>
            <div className="textBar">Stadiums I Have Been Too</div>
            <div className="textBar">Stadiums I Want To Go Too</div>
            <NewFieldForm addNewField={addNewField} user={user}/>
        </div>
    )
}
export default UserContainer;