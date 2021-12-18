import "./App.scss";
import React from "react";
import Header from "./components/header/Header";
import Grid from "./components/meetupGrid/Grid";
import { useState } from "react";

function App() {
  const [searchString, setSearchString] = useState<string>("");
  
  return (
    <div className="App">
      <Header searchText={searchString} setSearchText={setSearchString} />
      <Grid searchText={searchString}   />

      
    </div>
  );
}

export default App;
