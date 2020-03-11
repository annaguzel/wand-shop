import React from 'react';
import './App.css';
import wands from "./wands";
import WandList from "./WandList";

function App() {
  return (
    <div id="app" className="container">
      <div className="row">
        <div className="content col-11">
          <WandList wands={wands} />
        </div>
      </div>
    </div>
  );
}
export default App;