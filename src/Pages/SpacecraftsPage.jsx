import { useEffect, useState } from "react";
import SpaceTravelApi from '../services/SpaceTravelApi';
import Loading from "../Components/Loading";
import Card from "../Components/Card";
// --------------------------------------------------------------------------------
const SpacecraftsPage = () => {
  const [spacecrafts, setSpacecrafts] = useState([]);
  const [loading, setLoading] = useState(true);

  // --------------------------------------------------------------------------------

  useEffect(() => {

    try{
    async function fetchSpacecrafts() {
      const response = await SpaceTravelApi.getSpacecrafts();

      if(!response.isError) {
        setSpacecrafts(response.data);
      } else{
        console.error("Error fetching spacecrafts:", response.data);
      }

      setLoading(false);
    }} catch (err){
      setErrors("Something went wrong loading the data.");
    }


    fetchSpacecrafts();
  }, []);
// --------------------------------------------------------------------------------


  if(loading) {
    return <Loading />;
  }

  if(error) return <h2>{error}</h2>

// --------------------------------------------------------------------------------

  try{
  const handleDelete = async (id) => {
    const response = await SpaceTravelApi.destroySpacecraftById({ id });

    if (!response.isError) {
      setSpacecrafts((prev) => prev.filter((craft) => craft.id !== id));
    } else {
      console.error("Error deleting the spacecraft:", response.data);
    }
  };} catch(err){
    setErrors("Trouble deleting the spacecraft")
  }
  

  
  return (
    <div>
      <h2>Checkout Our Available Spacecraft Inventory:</h2>

      {spacecrafts.length === 0 ? (
        <p>No spacecraft available.</p>
      ) : (
        spacecrafts.map((craft) => (
            <Card 
              key={craft.id}
              craft={craft}
              onDelete={handleDelete}
            />
        ))
      )}
    </div>
  );
};

export default SpacecraftsPage;