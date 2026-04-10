import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SpaceTravelApi from "../services/SpaceTravelApi";
// --------------------------------------------------------------------------------
const CreateSpacecraftPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");;
  const [capacity, setCapacity] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState("");
// ------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !capacity || !description) {
      setError("*Required - All fields must be filled out.*");
      return;
    }

    const response = await SpaceTravelApi.buildSpacecraft({
      name,
      capacity: Number(capacity),
      description,
    });

    if (!response.isError) {
      navigate("/spacecrafts"); // sends us back to the list
    } else {
      setError("Error creating spacecraft.");
    }
  };
// --------------------------------------------------------------------------------


  return (
    <div>
      <h2>Build Your Spacecraft!</h2>

      {error && <p style={{ color: "red" }}>{ error }</p>}

      <form onSubmit={handleSubmit}>
            <div>
              <label>Name: </label>
              <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>


            <div>
              <label>Capacity</label>
              <input 
                type="number"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              />
            </div>

            <div>
              <label>Description</label>
              <input 
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateSpacecraftPage;
