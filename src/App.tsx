import React from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
    return (
        <div className="App">
            <h1>Heading</h1>
            <Sidebar/>
            <Feed/>
        </div>
    );
}

export default App;
