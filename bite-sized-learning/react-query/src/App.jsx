import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { pages } from "./lib/config";
// pages
import Home from "./pages/Home/Home";
import BasicGETExample from "./pages/BasicGETExample/BasicGETExample";
import PassingParams from "./pages/PassingParams/PassingParams";
// exercises
// import BasicGETExercise from "./pages/BasicGETExample/exercise/BasicGETExercise";
// import PassingParamsExercise from "./pages/PassingParams/exercise/PassingParamsExercise";

// solutions
// import BasicGETExample from "./pages/BasicGETExample/solution/BasicGETExample";
// import PassingParams from "./pages/PassingParams/solution/PassingParams";

const { home, basicGETExample, passingParams } = pages;

const App = () => {
  const [page, setPage] = useState(home);

  return (
    <div id="app">
      <div id="header">
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>React Query</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => setPage(home)}>Home</Nav.Link>
                <NavDropdown title="Examples" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => setPage(basicGETExample)}>
                    {basicGETExample}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setPage(passingParams)}>
                    {passingParams}
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
          {page === basicGETExample && <BasicGETExample />}
          {page === passingParams && <PassingParams />}

          {/* exercises */}
          {/* <BasicGETExercise /> */}
          {/* <PassingParamsExercise /> */}
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
