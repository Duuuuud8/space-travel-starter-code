import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavBar = () => {
  NavBar.propTypes = {};
  
  return (
    <nav style={{
           display: "flex",
           justifyContent: "space-between",
           padding: "10px",
           borderBottom: "1px solid gray" 
    }}
    >
        <h2>👾Space Travel Index👽</h2>

        <div>
            <Link to="/">Home</Link>
            <Link to="/spacecrafts">Spacecrafts</Link>
            <Link to="/create">Build</Link>
            <Link to="/planets">Planets</Link>
        </div>
    </nav>
  );
};

export default NavBar
