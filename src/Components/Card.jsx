import Button from "./Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

Card.propTypes = {
  craft: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};  


const Card = ({ craft, onDelete }) => {
  return (
    <div className="card">
      <Link to={`/spacecrafts/${craft.id}`}>
        <h3>{craft.name}</h3>
      </Link>

      <p>Capacity: {craft.capacity}</p>

      <p>{craft.description.substring(0, 75)}</p>
      
      <Button onClick={() => onDelete(craft.id)}>
        Delete
      </Button>
    </div>
  );
};

export default Card;