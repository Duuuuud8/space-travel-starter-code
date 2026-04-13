import PropTypes from "prop-types";

const Button = ({ children, onClick, type="button" }) => {
  return (
      <button 
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
  );
};

// define what props this component expects
Button.propTypes = {
  children: PropTypes.node.isRequired,
  // text- prop name  /  node- type it must match  /  isRequired- cannot be missing
  // children="Click Me" / "Submit" / "Send"
  // node=anything React can RENDER - text/jsx/etc
  onClick: PropTypes.func,
  type: PropTypes.string,
  // expects "button", "submit" "reset"
  // type: PropTypes.oneOf(["button", "submit" "reset"]) alternative to only allow these values
};

export default Button;