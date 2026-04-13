import { render, screen } from "@testing-library/react";
// import the tools
// render- makes a fake DOM for testing
// screen- your view into that dom-and gives access to all query methods
import Loading from "../Components/Loading";
// import the Component we are testing


// test- run this block as one test
// "renders loading text"- 1at argument & name we give the test - pass or fail this shows up
// () => {  - start of 2nd argument, the test function
// () empty because we have no inputs, other examples we would use name or id
test("renders loading text", () => {
    render(<Loading />);
    // render, testing fx, tests the Component on this fake page
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    // expect- starts assertion - find something on the screen
    // check the expected result happened as it should
    // (/loading/i) - i=case insensitive
    // screen-look on rendered fake page
    // getByText - match this text
    // toBeInTheDocument()- match confirmation 
});