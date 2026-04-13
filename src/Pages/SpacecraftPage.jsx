import { useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import SpaceTravelApi from "../services/SpaceTravelApi";
import Loading from "../Components/Loading";


const SpacecraftPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [spacecraft, setSpacecraft] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");



  useEffect(() => {
    async function fetchSpacecraft() {
      try{
      const response = await SpaceTravelApi.getSpacecraftById({ id });

      if(!response.isError) {
        setSpacecraft(response.data);
      } else {
        setError("Error fetching spacecraft:");
        console.error(response.data);
      }} catch(err){
        setError("Error fetching spacecraft:")
        console.error(err)
      } finally {
      setLoading(false);
      }
    }
    
    fetchSpacecraft();
  }, [id]);

    if(loading) {
      return <Loading />;
    }

    if (error) {
      return <h2>{error}</h2>
    }

    if (!spacecraft) {
      return <h2>Spacecraft not found.</h2>;
    }


  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>

      <h2>{spacecraft.name} Info:</h2>
      <p>Capacity: {spacecraft.capacity}</p>
      <p>{spacecraft.description}</p>
      <p>Current Location: {spacecraft.currentLocation}</p>
    </div>
  );
};

export default SpacecraftPage;
