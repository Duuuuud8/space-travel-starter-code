import AppRoutes from "./Routes/AppRoutes";
import "./App.css"; {/* delete the import styles from "./App.modules.css" */}
import NavBar from "./Components/NavBar";
import ErrorBoundary from "./Components/ErrorBoundary";

function App (){
  return (
    <div className="app-container">
      <ErrorBoundary>
        <NavBar />
        <AppRoutes />  
      </ErrorBoundary>      
    </div>
  );
}

export default App;
