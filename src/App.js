import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AddNew from "./components/AddNew";
import CaveContainer from "./components/CaveContainer";

// http://localhost:3000/caves



function App() {
  const [caves, setCaves] = useState([]);

  function addCaves(newCave) {
    const updatedCaves = [...caves, newCave]
    setCaves(updatedCaves);
  }


  useEffect(() => {
    fetch("https://phase-2-project-backend-t7ie.onrender.com")
    .then(r => r.json())
    .then(data => setCaves(data))
    .catch(error => console.log("error finding data", error))
}, [])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/explore">
          <CaveContainer caves={caves} />
        </Route>
        <Route path="/add">
          <AddNew onAddCave={addCaves} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
