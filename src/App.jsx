import AppRoutes from "./Routes/AppRoutes";
import "./App.css"; {/* delete the import styles from "./App.modules.css" */}
import NavBar from "./Components/NavBar";

function App (){
  return (
    <div className="app-container">
      <NavBar />
      <AppRoutes />        
    </div>
  );
}

export default App;
