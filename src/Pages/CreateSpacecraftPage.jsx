import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SpaceTravelApi from "../services/SpaceTravelApi";
import Button from "../Components/Button";
// --------------------------------------------------------------------------------
const CreateSpacecraftPage = () => {
  const navigate = useNavigate();

  // const [name, setName] = useState("");;
  // const [capacity, setCapacity] = useState("");
  // const [description, setDescription] = useState(""); clunky way
  const [formData, setFormData] = useState({
    name: "",
    capacity: "",
    description: "",
  });

  const [errors, setErrors] = useState([]);
// ------------------------------------------
  const handleChange = (e) => {
    const {name, value} = e.target;

    // if (name === "capacity" && Number(value) < 1) {
    //   return;
    // } commented out for testing purposes

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

// ------------------------------------------

  const handleSubmit = async (e) => {
      e.preventDefault();

      const newErrors = [];

      if (!formData.name || !formData.capacity || !formData.description) {
        newErrors.push("*Required - All fields must be filled out.*");
      }

      if (Number(formData.capacity) < 1) {
        newErrors.push("Capacity cannot be negative");
      }

      if (newErrors.length > 0) {
        setErrors(newErrors);
        return;
      }

      try{
      const response = await SpaceTravelApi.buildSpacecraft({
        ...formData,
        capacity: Number(formData.capacity),
      });} catch (err){
        setErrors("Failed to create spacecraft, try again.");
      }

      if (!response.isError) {
        navigate("/spacecrafts"); // sends us back to the list
      } else {
        setError("Error creating spacecraft.");
        console.error(response.data);
      }
    };
// --------------------------------------------------------------------------------


  return (
    <div>
      <h2>Build Your Spacecraft!</h2>

      {errors.map((err, i) => (
        <p  key={i}
            style={{ color: "red" }}
        >
          { err }
        </p>
      ))}

      <form onSubmit={handleSubmit}>
            <div>
              <label>Name: </label>
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>


            <div>
              <label>Capacity</label>
              <input 
                name="capacity"
                type="number"
                min="1"
                value={formData.capacity}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <Button type="submit">
              Create Ship
            </Button>
      </form>
    </div>
  );
};

export default CreateSpacecraftPage;
