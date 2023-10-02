import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { pages } from "./lib/config";
// pages
import Home from "./pages/Home/Home";
import ComplexComponent from "./pages/ComplexComponent/ComplexComponent";
import CodeDuplication from "./pages/CodeDuplication/CodeDuplication";
import DerivedState from "./pages/DerivedState/DerivedState";
import UnhandledStateAndErrors from "./pages/UnhandledStateAndErrors/UnhandledStateAndErrors";
import TooManyPropsApp from "./pages/TooManyProps/TooManyPropsApp";
import PropDrillingApp from "./pages/PropDrilling/PropDrillingApp";

const {
  home,
  complexComponent,
  codeDuplication,
  derivedState,
  unhandledStateAndErrors,
  tooManyProps,
  propDrilling,
} = pages;

const App = () => {
  const [page, setPage] = useState(home);

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
                  <NavDropdown.Item onClick={() => setPage(tooManyProps)}>
                    {tooManyProps}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setPage(propDrilling)}>
                    {propDrilling}
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
          {page === tooManyProps && <TooManyPropsApp />}
          {page === propDrilling && <PropDrillingApp />}
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
