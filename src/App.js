import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AddNew from "./components/AddNew";
import CaveContainer from "./components/CaveContainer";


function App() {
  const [page, setPage] = useState("/home");

  return (
    <div className="App">
      <NavBar onChangePage={setPage} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/explore">
          <CaveContainer />
        </Route>
        <Route path="/add">
          <AddNew />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
