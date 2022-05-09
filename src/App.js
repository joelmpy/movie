import React from "react";
import "./style/App.css";
import Header from "./component/Header";
import Routeur from "./routes/Routeur";

// import Serie from "./Serie";
// import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routeur />
    </div>
  );
}

{
  /* <Routes>
        <Route path='serie' element={<Serie/>}/>
    
      </Routes> */
}
export default App;
