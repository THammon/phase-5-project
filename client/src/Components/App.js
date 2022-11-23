import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar"
import ConferenceContainer from "./ConferenceContainer"
import UserContainer from "./UserContainer";
import Signup from "./Signup";
import Login from "./Login";


function App() {
  const [currentUser, setCurrentUser] = useState(false)
  const [errors, setErrors] = useState(false)
  const [fields, setFields] = useState([])
  const [conferences, setConferences] = useState([])
  const [rivalries, setRivalries] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("/fields")
    .then((r) => r.json())
    .then((data) => setFields(data))
  },[])

  useEffect(() => {
    fetch("/rivalries")
    .then((r) => r.json())
    .then((data) => setRivalries(data))
  },[])

  useEffect(() => {
    fetch("/conferences")
    .then((r) => r.json())
    .then((data) => setConferences(data))
  },[])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      }
    }).then(() => {
      fetch(`/users/${currentUser.id}`)
     .then(res => {
        if(res.ok){
          res.json().then(user => {
              setCurrentUser(user)
            })
        }else {
            res.json().then(data => setErrors(data.error))
        }
    })
    })
  }, []);

  function addNewFields(newFieldObj){
    setFields([...newFieldObj])
  }

  function deleteStadium(deletedStadium){
    const updatedStadiums = fields.filter((stadia) => stadia.id !== deletedStadium.id)
    setFields(updatedStadiums)
  }

  const displayedFields = fields?.filter((field) => {
    return field?.field_name?.toLowerCase().includes(search.toLowerCase())
  })

  const updateUser = (user) => setCurrentUser(user)

  return (
    <div className="App">
      <NavBar currentUser={currentUser} updateUser = {updateUser}/>
      <Routes>
        <Route exact path = "/" element={<ConferenceContainer conferences={conferences} rivalries={rivalries} field={displayedFields} setSearch={setSearch}/>}/>
        <Route path = "/UserContainer" element={<UserContainer errors = {errors} addNewFields={addNewFields} deleteStadium={deleteStadium} user={currentUser}/>}/>
        <Route path = "/Login" element={<Login updateUser={updateUser}/>}/>
        <Route path = "/Signup" element={<Signup updateUser={updateUser}/>}/>
      </Routes>
    </div>

  );
}

export default App;

