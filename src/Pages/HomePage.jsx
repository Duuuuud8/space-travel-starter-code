const HomePage = () => {
  // throw new Error("test crash");
  // throws a code to test our page if something were to happen

  return (
    <div className="home-page">
      <h2>Home Page</h2>
      <h3>Check out some Spaceships and Planets that we are gonna get to visit!</h3>
      <p>
        You can check out the Spacecraft we have available as well as clicking on them to 
        see their detailed info. The detailed info will be limited on the spacecrafts page,
        but worry not future traveler, click on the spacecraft for the full details of the 
        spacecraft including: name, capacity, and full description.
        
        You can also check out the planets in our solar system and 
        see which of them have spacecraft there. 
        
        On top of all of that you can build your very own SPACECRAFT. Just be sure to have 
        all the fields filled out or it will not let you submit it and sent into be completed
         at the factory!
      </p>
    </div>
  );
}

export default HomePage;
