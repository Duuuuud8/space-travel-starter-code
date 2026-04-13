Space Travel

Overview

This is a react app built to help the commanders manage spacecraft to evacuate Earth. Ability to get the details of each spacecraft, build new ones, decomission old ones, see the planets we can travel to, dispatch the spacecraft to their respective destinations.

Mock API is already set up in local storage. These are setup in the services folder.

Features

- Home - Overview of app
- Spacecrafts - See available Spacecraft
- Spacecraft - Detailed Info of the clicked on Spacecraft
- CreateSpacecraft - Build your own Spacecraft to your specifications!
- PlanetPage - Show available habitable planets in our solar system to go visit
    + able to dispatch spacecraft to different planets
- Loading Component - Resuable Loading screen for the async functions to load the data they fetched
- Undefined Routes - redirected to the homepage if the route is not defined


Progamming Languages & Libraries Used
- Javascript
- CSS
- React
- Vite
- Local Storage of mock API

- Ignoring CSS Modules at the moment (delted)


src/
    Components/
        Button.jsx
        Card.jsx
        Loading.jsx
        NavBar.jsx
    Pages/
        CreateSpacecraft.jsx
        HomePage.jsx
        PlanetsPage.jsx
        SpacecraftPage.jsx
        SpacecraftsPage.jsx
    Routes/
        AppRoutes.jsx
    Services/
        SpaceTravelApi.js
        SpaceTravelApiMock.js
    App.css
    App.jsx
    App.module.css (not used)
    index.css
    main.jsx


Home 
- Overview of app

Spacecrafts 
- See available Spacecraft
- Delete Spacecraft for decommissioning
- Able to click on each Spacecraft to pull them up

Spacecraft 
- Detailed Info of the clicked on Spacecraft
- Name, Capacity, Description

CreateSpacecraft 
- Build your own Spacecraft to your specifications!
-Must include All;
    + Name
    + Positive number above 1
    + Description

PlanetPage 
- Show available habitable planets in our solar system to go visit
- Able to use the drop down menu to choose where to send the spacecraft that is on each planet
- Send button to send the Spacecraft to the chosen location


API Notes

Planet
{
  id: <int>, // means data type is an integer
  name: <string>,
  currentPopulation: <int>,
  pictureUrl: [<string>] // means optional
}

Spacecraft
{
  id: <string>,
  name: <string>,
  capacity: <int>,
  description: <string>,
  pictureUrl: [<string>],
  currentLocation: <int>
}

API is stored in local storage



