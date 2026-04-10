import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css"; {/* delete the import styles from "./App.modules.css" */}
import NavBar from "./Components/NavBar";

import HomePage from "./Pages/HomePage";
import SpacecraftsPage from "./Pages/SpacecraftsPage";
import SpacecraftPage from "./Pages/SpacecraftPage";
import CreateSpacecraftPage from "./Pages/CreateSpacecraftPage";
import PlanetsPage from "./Pages/PlanetsPage";


function App (){
  return (
    <div className="app-container">
      <NavBar />
      
        <Routes> {/* make the path short and easy for URL */}
          <Route path="/" element={<HomePage />} />
          <Route path="/spacecrafts" element={<SpacecraftsPage />} />
          <Route path="/spacecrafts/:id" element={<SpacecraftPage />} />
          <Route path="/create" element={<CreateSpacecraftPage />} />
          <Route path="/planets" element={<PlanetsPage />} />

          {/* redirect unknown routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </div>
  );
}

export default App;
