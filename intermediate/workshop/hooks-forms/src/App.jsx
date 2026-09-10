import { useState } from "react";
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

const home = "Home";

const pageDefinitions = [
  { name: home, component: Home },
  { name: "useState() demo", component: UseState },
  { name: "useEffect() demo 1", component: UseEffect1 },
  { name: "useEffect() demo 2", component: UseEffect2 },
  { name: "useState() with event", component: UseStateWithEvent },
  { name: "useEffect() demo 3", component: UseEffect3 },
  { name: "useReducer()", component: UseReducer },
  { name: "Simple input", component: SimpleInput },
  { name: "Input and Textarea", component: InputTextarea },
  {
    name: "Selects, Radio Buttons and Checkboxes",
    component: SelectRadioButtonCheckbox,
  },
  { name: "Form submit", component: FormSubmit },
];

const App = () => {
  const [page, setPage] = useState(home);
  const activePage = pageDefinitions.find((pageDefinition) => pageDefinition.name === page);
  const ActiveComponent = activePage?.component ?? Home;

  return (
    <div id="app">
      <header id="header">
        <nav className="nav-shell">
          <div className="brand-block">
            <p className="eyebrow">Workshop</p>
            <h1>Intermediate React</h1>
          </div>
          <details className="examples-panel" open>
            <summary>Examples</summary>
            <div className="example-list">
              {pageDefinitions.map((pageDefinition) => (
                <div key={pageDefinition.name}>
                  <button
                    className={
                      page === pageDefinition.name
                        ? "nav-button is-active"
                        : "nav-button"
                    }
                    type="button"
                    onClick={() => setPage(pageDefinition.name)}
                  >
                    {pageDefinition.name}
                  </button>
                </div>
              ))}
            </div>
          </details>
        </nav>
      </header>
      <main id="main">
        <section className="content-card">
          <ActiveComponent />
        </section>
      </main>
      <footer id="footer">
        <p>Made with ❤️ in Greece.</p>
      </footer>
    </div>
  );
};

export default App;
