import { render, screen, fireEvent } from "@testing-library/react";
// fireEvent- simulates a user action
import { MemoryRouter } from "react-router-dom";
import CreateSpacecraftPage from "../Pages/CreateSpacecraftPage";

test("shows validation errors when empty form is submitted", () => {
    render(
        <MemoryRouter>
            <CreateSpacecraftPage />
        </MemoryRouter>
    );

    const button = screen.getByRole("button", {name: /create/i});
    // find the button that says "create"
    // getByRole gets button/textbox/heading/link
    fireEvent.click(button);
    // dispatch a click event to the button you saved in the button variable

    expect(screen.getByText(/all fields/i)).toBeInTheDocument();
    expect(screen.getByText(/capacity cannot be negative/i)).toBeInTheDocument();
});