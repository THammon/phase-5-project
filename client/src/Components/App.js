// client/src/components/App.js
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
  const [stadiums, setStadiums] = useState([])
  const [conferences, setConferences] = useState([])
  const [rivalries, setRivalries] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("/stadia")
    .then((r) => r.json())
    .then((data) => setStadiums(data))
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

  function addNewStadium(newStadiumObj){
    setStadiums([...newStadiumObj])
  }

  function deleteStadium(deletedStadium){
    const updatedStadiums = stadiums.filter((stadia) => stadia.id !== deletedStadium.id)
    setStadiums(updatedStadiums)
  }

  // const displayedStadiums = stadiums?.filter((stadia) => {
  //   return stadia?.stadium_name?.toLowerCase().includes(search.toLowerCase())
  // })

  const updateUser = (user) => setCurrentUser(user)

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path = "/" element={<ConferenceContainer conferences={conferences} rivalries={rivalries} stadiums={stadiums} setSearch={setSearch}/>}/>
        <Route path = "/UserContainer" element={<UserContainer errors = {errors} addNewStadium={addNewStadium} deleteStadium={deleteStadium} user={currentUser}/>}/>
        <Route path = "/Login" element={<Login updateUser={updateUser}/>}/>
        <Route path = "/Signup" element={<Signup updateUser={updateUser}/>}/>
      </Routes>
    </div>

  );
}

export default App;

