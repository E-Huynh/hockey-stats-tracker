import React from "react";
import Table from "./components/table";
import Teams from "./components/teams";

function App() {
    return (
        <div className='container'>
            <h1 className="center-align white-text">Hockey Stats Tracker</h1>
              <Teams />
        </div>
    )
}

export default App;
