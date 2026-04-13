import Button from "./Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; 


const Card = ({ craft, onDelete }) => {
  return (
    <div className="card">
      <Link to={`/spacecrafts/${craft.id}`}>
        <h3>{craft.name}</h3>
      </Link>

      <p>Capacity: {craft.capacity}</p>

      <p>{craft.description?.substring(0, 75)}</p>
      {/* ?. run only if this exists */}
      
      <Button onClick={() => onDelete(craft.id)}>
        Delete
      </Button>
    </div>
  );
};

Card.propTypes = {
  craft: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      capacity: PropTypes.number,
      description: PropTypes.string.isRequired,
  }).isRequired,

  onDelete: PropTypes.func.isRequired,
}; 

export default Card;