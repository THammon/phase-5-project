import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function NewFieldForm({addNewField, user}){
    const [newFieldName, setNewFieldName] = useState("")
    const [newTeamName, setNewTeamName] = useState("")
    const [newFieldImage, setNewFieldImage] = useState("")
    const [newTeamImage, setNewTeamImage] = useState("")
    const [expandForm, setExpandForm] = useState(false)
    const [errors, setErrors] = useState([]);
    // const [newConference, setNewConference] = useState("")
    // const [newRivalry, setNewRivalry] = useState("")

    let navigate = useNavigate();

    function expandedForm(){
        setExpandForm(prev => !prev)
    }

    function handleSubmit(e){
        e.preventDefault()
        // setIsLoading(true)
        const newFieldObj={
            field_name: newFieldName,
            team_name: newTeamName,
            field_image: newFieldImage,
            team_image: newTeamImage,
            user_id: parseInt(user.id)
            // conference_id: parseInt(newConference),
            // rivalry_id: parseInt(newRivalry)
        }
        fetch(`/fields`, {
            method: `POST`,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newFieldObj)
        }).then((r) => {
            // setIsLoading(false)
            if (r.ok) {
              r.json().then((user) => {
               addNewField(user)
               navigate(`/UserContainer`)
          });
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
        })
    }

    return(
        <div className="textBar">
            <h1>Have you been to a stadium that you don't see listed? Add it to your page with the form below!</h1>
            <button className='buttonOtherPretty' onClick={expandedForm}>Click To Show Form</button>
            {expandForm &&
                <div>
                    <form className='trueForm' onSubmit={handleSubmit}>
                        <label>Stadium Name</label>
                        <input 
                        className='form-container-input'
                        type="text" 
                        placeholder="Name of Field..." 
                        value={newFieldName} 
                        onChange={(e) => setNewFieldName(e.target.value)}/>
                        <label>Home Team Name</label>
                        <input 
                        className='form-container-input'
                        type="text" 
                        placeholder="Name of Team..." 
                        value={newTeamName} 
                        onChange={(e) => setNewTeamName(e.target.value)}/>
                        <label>Stadium Image</label>
                        <input 
                        className='form-container-input'
                        type="text" 
                        placeholder="URL for Field Image..." 
                        value={newFieldImage} 
                        onChange={(e) => setNewFieldImage(e.target.value)}/>
                        <label>Team Image</label>
                        <input 
                        className='form-container-input'
                        type="text" 
                        placeholder="URL for Team Image..." 
                        value={newTeamImage} 
                        onChange={(e) => setNewTeamImage(e.target.value)}/>
                        <button type='submit' className='buttonPretty'>Add Your New Stadium</button>
                    </form>
                {errors? <div>{errors}</div>:null} 
                </div>
            }
        </div>
    )
}
export default NewFieldForm;