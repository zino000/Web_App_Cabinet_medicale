import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CabinetLoginPage from "./pages/CabinetLoginPage/CabinetLoginPage";
import SuperAdminLogin from "./pages/SuperAdmin/SuperAdminLogin";
import SuperAdminDashboard from "./pages/SuperAdmin/SuperAdminDashboard";
import SuperAdminAddCabinet from "./pages/SuperAdmin/SuperAdminAddCabinet";


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
            <Route path="/admin/login" element={<CabinetLoginPage />}></Route>
            <Route path="/superAdmin/login" element={<SuperAdminLogin />}></Route>
            <Route path="/superAdmin/dashboard" element={<SuperAdminDashboard />}></Route>
            <Route path="/superAdmin/ajouterCabinet" element={<SuperAdminAddCabinet />}></Route>
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
