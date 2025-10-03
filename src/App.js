import "./App.css";
import React from "react";
import ImagePile from "./components/ImagePile";
import StatisticsInfo from "./components/StatisticsInfo";

function App() {
  return (
    <div className="app-root">
      <header className="top-row">
        <StatisticsInfo />
      </header>

      <main className="center-pile">
        <ImagePile />
      </main>
    </div>
  );
}

export default App;
