import React, {useState} from "react";
import NewFieldForm from "./NewFieldForm";


function UserContainer({fields, addNewFields, deleteField, user, rivalries, conferences, addNewConf, addNewRival, beenTo, wantToGo}){
    
    const [visitCount, setVisitCount] = useState(fields.visit)

    // fields.map(personalField => ({...field} field={personalField} key={personalField.id} )

    function handleDeleteClick(){
        fetch (`/fields/${fields.id}`,{
            method:"DELETE",
        })
        deleteField(fields)
    }

    function handleUpdateClick(){
 
        fetch(`fields_visit/${fields.id}}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                visit: fields.visit += 1
            })            
        }).then(res => res.json())
          .then(data => setVisitCount(data.visit))
    }

    console.log(fields.visit)
    return(
        <div>
            <div >
                <div className="textBar">{`Welcome ${user.first_name}`}</div>
                <div className="textBar">Stadiums I Have Been Too</div>
                
                <div className="userContainer">
                    {beenTo.map(field => <div className="priCard">{field.field_name} <br/>
                    {`Home To The ${field.team_name}`}<br/> 
                    {<img className="teamImage" alt={field.team_image} src = {field.team_image}/>}<br/> 
                    <img className="priImage" alt={field.field_name} src = {field.field_image}/> <br/>

                    {`Rival Team: ${field.rivalry.rival_team}`}  
                    {<img className="teamImage" alt={field.rivalry.rival_logo} src = {field.rivalry.rival_logo} />} <br/>
                    {`Times Visited: ${visitCount}`} <br/>
                     <button id="buttonDiv" className="remove" onClick={handleUpdateClick}>Add Times Visited</button></div>)}
                </div>
                
                <div className="textBar">Stadiums I Want To Go Too</div>
                <div className="userContainer">{wantToGo.map(field => <div className="priCard">{field.field_name} <br/>
                {`Home To The ${field.team_name}`} <br/> {<img className="teamImage" alt={field.team_image} src = {field.team_image}/>}<br/>
                <img className="priImage" alt={field.field_name} src = {field.field_image}/>
                <br/>
                {`Rival Team: ${field.rivalry.rival_team}`}  
                {<img className="teamImage" alt={field.rivalry.rival_logo} src = {field.rivalry.rival_logo}/>}
                <br/>
                <button id="buttonDiv" className="remove" onClick={handleDeleteClick}>Delete Stadium</button> </div>)}
                </div>
                               
            </div>
            <div>
                <NewFieldForm addNewFields={addNewFields} user={user} rivalries={rivalries} conferences={conferences} addNewConf={addNewConf} addNewRival={addNewRival}/>
            </div>
        </div>
    )
}
export default UserContainer;