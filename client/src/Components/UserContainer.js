import NewStadiumForm from "./NewStadiumForm";

function UserContainer({addNewStadium, user}){

    return(
        <div>
            <NewStadiumForm addNewStadium={addNewStadium} user={user}/>
        </div>
    )
}
export default UserContainer;