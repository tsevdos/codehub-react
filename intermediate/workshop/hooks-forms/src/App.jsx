import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// Pages
import Home from "./views/Home";
// Hooks
import UseState from "./views/hooks/UseState";
import UseEffect1 from "./views/hooks/UseEffect1";
import UseEffect2 from "./views/hooks/UseEffect2";
import UseStateWithEvent from "./views/hooks/UseStateWithEvent";
import UseEffect3 from "./views/hooks/UseEffect3";
import UseReducer from "./views/hooks/UseReducer";
// Forms
import SimpleInput from "./views/forms/SimpleInput";
import InputTextarea from "./views/forms/InputTextarea";
import SelectRadioButtonCheckbox from "./views/forms/SelectRadioButtonCheckbox";
import FormSubmit from "./views/forms/FormSubmit";
import { pages } from "./lib/config";

const {
  home,
  useStateHook,
  useEffect1,
  useEffect2,
  useStateWithEvent,
  useEffect3,
  useReducer,
  simpleInput,
  inputAndTextarea,
  selectRadioButtonCheckbox,
  formSubmit,
} = pages;

const App = () => {
  const [page, setPage] = useState(home);

  return (
    <div id="app">
      <div id="header">
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>Intermediate React</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => setPage(home)}>Home</Nav.Link>
                <NavDropdown title="Examples" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => setPage(useStateHook)}>
                    {useStateHook}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setPage(useEffect1)}>
                    {useEffect1}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setPage(useEffect2)}>
                    {useEffect2}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setPage(useStateWithEvent)}>
                    {useStateWithEvent}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setPage(useEffect3)}>
                    {useEffect3}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setPage(useReducer)}>
                    {useReducer}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setPage(simpleInput)}>
                    {simpleInput}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setPage(inputAndTextarea)}>
                    {inputAndTextarea}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => setPage(selectRadioButtonCheckbox)}
                  >
                    {selectRadioButtonCheckbox}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setPage(formSubmit)}>
                    {formSubmit}
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <main id="main">
        <Container>
          {/* Hooks */}
          {page === home && <Home />}
          {page === useStateHook && <UseState />}
          {page === useEffect1 && <UseEffect1 />}
          {page === useEffect2 && <UseEffect2 />}
          {page === useStateWithEvent && <UseStateWithEvent />}
          {page === useEffect3 && <UseEffect3 />}
          {page === useReducer && <UseReducer />}
          {/* Forms */}
          {page === simpleInput && <SimpleInput />}
          {page === inputAndTextarea && <InputTextarea />}
          {page === selectRadioButtonCheckbox && <SelectRadioButtonCheckbox />}
          {page === formSubmit && <FormSubmit />}
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
