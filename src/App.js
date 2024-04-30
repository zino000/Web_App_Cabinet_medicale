import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ChoicePage from "./pages/ChoicePage/ChoicePage";


//Providers
//import { AdminProvider } from "../Contexts/AdminContext";

//Administrateur pages
//import Homepage from "../pages/Homepage/Homepage";



function App() {
  useEffect(() => {
    document.title = "MediCare";
  }, []);

  const [user, setUser] = useState(null);

  return (
    <Router>
        <Routes>
            <Route path="/test" element={<ChoicePage />}></Route>
        </Routes>
      {/* <AdminProvider>
        <Routes>
          
        </Routes>
      </AdminProvider>
      <EncadrantProvider>
        <Routes>
          
        </Routes>
      </EncadrantProvider>
      <StagiaireProvider>
        <Routes>
          
        </Routes>
      </StagiaireProvider> */}
    </Router>
  );
}

export default App;
