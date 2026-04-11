import { useState, useEffect } from "react";
import SpaceTravelApi from "../services/SpaceTravelApi";
import Loading from "../Components/Loading";
import Button from "../Components/Button";


const PlanetsPage = () => {
  const [planets, setPlanets] = useState([]);
  const [spacecrafts, setSpacecrafts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTargets, setSelectedTargets] = useState({});

  // --------------------------Fetch the Data ----------------------------------------------------------

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
// ------------------------------------Loading----------------------------
  if(loading) {
    return <Loading />;
  }
// ----------------------------------Send Spacecraft-----------------------------
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
// ---------------Reset DropDown Selections---------------------
      setSelectedTargets({});
    } else {
      alert(response.data.message || "Error sending spacecraft");
    }
  };

// --------------------------UI--------------------------------------------------

  return (
    <div>
      <h2>Planets</h2>

      {planets.map((planet) => (
        <div key={planet.id}
             className="planet-card"
        >
          <h3>{planet.name}</h3>
          <p>Population: {planet.currentPopulation}</p>

          <h4>Spacecrafts:</h4>

          {spacecrafts
            .filter((craft) => craft.currentLocation === planet.id)
            .map((craft) => (
              <div 
                key={craft.id}
                className="craft-row"
              >
                <p className="craft-name">{craft.name}</p>
                <div className="craft-controls">
                  <label htmlFor={`send-${craft.id}`}>Send to:</label>
                  <select
                    name={`send-${craft.id}`}
                    id={`send-${craft.id}`}
                    onChange={(e) =>
                      setSelectedTargets((prev) => ({
                        ...prev,
                        [craft.id]: Number(e.target.value)
                      })) 
                    }
                    value={selectedTargets[craft.id] || ""}
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
                

                <Button
                  onClick={() =>
                    handleSend(craft.id, selectedTargets[craft.id])
                  }
                  disabled={!selectedTargets[craft.id]}
                >
                  Send
                </Button> 
                </div>
              </div>
            ))
          }
        </div>
      ))}
    </div>
  );
}

export default PlanetsPage;
