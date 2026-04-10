import { useState, useEffect } from "react";
import SpaceTravelApi from "../services/SpaceTravelApi";
import Loading from "../Components/Loading";
const PlanetsPage = () => {
  const [planets, setPlanets] = useState([]);
  const [spacecrafts, setSpacecrafts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const planetsResponse = await SpaceTravelApi.getPlanets();
      const spacecraftsResponse = await SpaceTravelApi.getSpacecrafts();

      if (!planetsResponse.isError) setPlanets(planetsResponse.data);
      if (!spacecraftsResponse.isError) setSpacecrafts(spacecraftsResponse.data);

      setLoading(false);
    }

    fetchData();
  }, []);

  if(loading) {
    return <Loading />;
  }

  const handleSend = async (spacecraftId, targetPlanetId) => {
    const response = await SpaceTravelApi.sendSpacecraftToPlanet({
      spacecraftId,
      targetPlanetId,
    });

    if (!response.isError) {
      const updatedPlanets = await SpaceTravelApi.getPlanets();
      const updatedCrafts = await SpaceTravelApi.getSpacecrafts();

      setPlanets(updatedPlanets.data);
      setSpacecrafts(updatedCrafts.data);
    } else {
      alert(response.data.message || "Error sending spacecraft");
    }
  };



  return (
    <div>
      <h2>Planets</h2>

      {planets.map((planet) => (
        <div key={planet.id}>
          <h3>{planet.name}</h3>
          <p>Population: {planet.currentPopulation}</p>

          <h4>Spacecrafts:</h4>

          {spacecrafts
            .filter((craft) => craft.currentLocation === planet.id)
            .map((craft) => (
              <div key={craft.id}>
                <p>{craft.name}</p>

                <select
                  onChange={(e) => 
                    handleSend(craft.id, Number(e.target.value))
                  }
                  defaultValue=""
                >
                  <option value="" disabled>
                    Send to...
                  </option>

                  {planets.map((plan) => (
                    <option key={plan.id} 
                            value={plan.id}
                            disabled={plan.id === craft.currentLocation}
                    >
                      {plan.name}
                    </option>
                  ))}
                </select>
              </div>
            ))
          }
        </div>
      ))}
    </div>
  );
}

export default PlanetsPage;
