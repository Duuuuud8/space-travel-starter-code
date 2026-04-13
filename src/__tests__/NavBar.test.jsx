import { render, screen } from "@testing-library/react";
import NavBar from "../Components/NavBar";
import { MemoryRouter } from "react-router-dom";
// MemoryRouter- fake Router since NavBar uses <Link> which only works inside a React Router
test("renders navigation links", () => {
    render(
       <MemoryRouter>
            <NavBar />
       </MemoryRouter>
    );

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/spacecrafts/i)).toBeInTheDocument();
    expect(screen.getByText(/planets/i)).toBeInTheDocument();
    expect(screen.getByText(/build/i)).toBeInTheDocument();
});