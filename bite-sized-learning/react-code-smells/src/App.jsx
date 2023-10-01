import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// pages
import Home from "./pages/Home/Home";
import ComplexComponent from "./pages/ComplexComponent/ComplexComponent";
import CodeDuplication from "./pages/CodeDuplication/CodeDuplication";
import DerivedState from "./pages/DerivedState/DerivedState";
import UnhandledStateAndErrors from "./pages/UnhandledStateAndErrors/UnhandledStateAndErrors";
// import TodoApp from "./pages/ComplexComponent/solution/TodoApp";
// import UserCard from "./pages/ComplexComponent/exercise/UserCard";
// import WidgetApp from "./pages/CodeDuplication/solution/WidgetApp";
// import UserCards from "./pages/CodeDuplication/exercise/UserCards";
// import TodosWithCategoriesApp from "./pages/DerivedState/solution/TodosWithCategoriesApp";
// import UserCart from "./pages/DerivedState/exercise/UserCart";

const pages = {
  home: "Home",
  complexComponent: "Complex component",
  codeDuplication: "Component and code duplication",
  derivedState: "Derived state",
  unhandledStateAndErrors: "Unhandled state and errors",
};

const { home, complexComponent, codeDuplication, derivedState, unhandledStateAndErrors } = pages;

const App = () => {
  const [page, setPage] = useState(home);

  console.log(page);

  return (
    <div id="app">
      <div id="header">
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>React code smells</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => setPage(home)}>Home</Nav.Link>
                <NavDropdown title="Examples" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => setPage(complexComponent)}>
                    {complexComponent}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setPage(codeDuplication)}>
                    {codeDuplication}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setPage(derivedState)}>
                    {derivedState}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setPage(unhandledStateAndErrors)}>
                    {unhandledStateAndErrors}
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <main id="main">
        <Container>
          {page === home && <Home />}
          {page === complexComponent && <ComplexComponent />}
          {page === codeDuplication && <CodeDuplication />}
          {page === derivedState && <DerivedState />}
          {page === unhandledStateAndErrors && <UnhandledStateAndErrors />}

          <h2>Solution</h2>

          <h2>Exercise</h2>
        </Container>
      </main>
      <footer id="footer">
        <Container>
          <footer>Made with ❤️ in Greece.</footer>
        </Container>
      </footer>
    </div>
  );
};

export default App;
