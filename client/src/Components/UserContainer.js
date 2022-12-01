import React, {useState} from "react";
import NewFieldForm from "./NewFieldForm";


function UserContainer({fields, addNewFields, deleteField, user, rivalries, conferences, addNewConf, addNewRival, beenTo, wantToGo}){
    
    const [visitCount, setVisitCount] = useState(fields.visit)
    const [displayRival, setDisplayRival] = useState(false)

    // fields.map(personalField => ({...field} field={personalField} key={personalField.id} )
    

    const rivalClick = () => {
        setDisplayRival((prev) => !prev)
    }

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
                <div className="textBar">{`Welcome ${user.first_name}🏈`}</div>
                <div className="textUserBar">Stadiums I Have Been Too</div>
                
                <div className="userCont">
                    {beenTo.map(field => <div className="userCard">{field.field_name} <br/>
                    {`Home To The ${field.team_name}`}<br/> 
                    {<img  className="teamImage" alt={field.team_image} src = {field.team_image}/>}<br/> 
                    <img onClick={rivalClick}className="priImage" alt={field.field_name} src = {field.field_image}/> <br/>

                    <div className="archRivalText">{displayRival ? `Arch Rival: ${field.rivalry.rival_team} `: false}</div>  
                    {displayRival ? <img className="teamImage"  alt="test" src={field.rivalry.rival_logo}/> : false}<br/>
                    {`Times Visited: ${visitCount}`} <br/>
                     <button id="buttonDiv" className="remove" onClick={handleUpdateClick}>Add Times Visited</button></div>)}
                </div>
                
                <div className="textUserBar">Stadiums I Want To Go Too</div>
                <div className="userCont">{wantToGo.map(field => <div className="userCard">{field.field_name} <br/>
                {`Home To The ${field.team_name}`} <br/> {<img className="teamImage" alt={field.team_image} src = {field.team_image}/>}<br/>
                <img onClick={rivalClick} className="priImage" alt={field.field_image} src = {field.field_image}/>
                <br/>
                <div className="archRivalText">{displayRival ? `Arch Rival: ${field.rivalry.rival_team} `: false}</div>  
                {displayRival ? <img className="teamImage"  alt="test" src={field.rivalry.rival_logo}/> : false}
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