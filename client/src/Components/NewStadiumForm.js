import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function NewStadiumForm({addNewStadium, user}){
    const [newStadiumName, setNewStadiumName] = useState("")
    const [newTeamName, setNewTeamName] = useState("")
    const [newStadiumImage, setNewStadiumImage] = useState("")
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
        const newStadiumObj={
            stadium_name: newStadiumName,
            team_name: newTeamName,
            stadium_image: newStadiumImage,
            team_image: newTeamImage,
            user_id: parseInt(user.id)
            // conference_id: parseInt(newConference),
            // rivalry_id: parseInt(newRivalry)
        }
        fetch(`/stadia`, {
            method: `POST`,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newStadiumObj)
        }).then((r) => {
            // setIsLoading(false)
            if (r.ok) {
              r.json().then((user) => {
               addNewStadium(user)
               navigate(`/UserContainer`)
          });
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
        })
    }

    return(
        <div className='form-container'>
            <h1>Have you been to a stadium that you don't see listed? Add it to your page with the form below!</h1>
            <button className='buttonOtherPretty' onClick={expandedForm}>Click To Show Form</button>
            {expandForm &&
                <div>
                    <form className='trueForm' onSubmit={handleSubmit}>
                        <label>Stadium Name</label>
                        <input 
                        className='form-container-input'
                        type="text" 
                        placeholder="Name of Stadium..." 
                        value={newStadiumName} 
                        onChange={(e) => setNewStadiumName(e.target.value)}/>
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
                        placeholder="URL for Stadium Image..." 
                        value={newStadiumImage} 
                        onChange={(e) => setNewStadiumImage(e.target.value)}/>
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
export default NewStadiumForm;