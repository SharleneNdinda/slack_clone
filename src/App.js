import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import React from "react";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* react router */}
      </div>
    </div>
  );
}

export default App;
