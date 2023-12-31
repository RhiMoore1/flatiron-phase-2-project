import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AddNew from "./components/AddNew";
import CaveContainer from "./components/CaveContainer";
import Wishlist from "./components/Wishlist";
import Visited from "./components/Visited";
import Liked from "./components/Liked";


// https://phase-2-project-backend-t7ie.onrender.com



function App() {
  const [caves, setCaves] = useState([]);

  function addCaves(newCave) {
    const updatedCaves = [...caves, newCave]
    setCaves(updatedCaves);
  }


  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/caves`)
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
        {/* <Route path="/wishlist">
          <Wishlist/>
        </Route>
        <Route path="/visited">
          <Visited />
        </Route>
        <Route path="/liked">
          <Liked />
        </Route> */}

      </Switch>
    </div>
  );
}

export default App;
