import NewFieldForm from "./NewFieldForm";

function UserContainer({addNewStadium, user}){

    return(
        <div>
            <div>{`Welcome ${user.first_name}`}</div>
            <div>Stadiums I Have Been Too</div>
            <div>Stadiums I Want To Go Too</div>
            <NewFieldForm addNewStadium={addNewStadium} user={user}/>
        </div>
    )
}
export default UserContainer;