import NewFieldForm from "./NewFieldForm";

function UserContainer({addNewStadium, user}){

    return(
        <div>
            <NewFieldForm addNewStadium={addNewStadium} user={user}/>
        </div>
    )
}
export default UserContainer;