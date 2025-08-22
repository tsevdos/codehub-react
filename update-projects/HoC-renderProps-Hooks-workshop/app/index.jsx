import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route,  NavLink } from "react-router-dom";
import StarWarsCharacters from "./examples/01/StarWarsCharacters";
import HocStarWarsCharacters from "./examples/02/StarWarsCharacters";
import HocStarWarsCharacters2 from "./examples/03/StarWarsCharacters";
import HocStarWarsCharacters3 from "./examples/04/StarWarsCharacters";
// import Card1 from "./examples/ex1/HOCExerciseCard";
import Card1 from "./examples/ex1/Card"; // solution
import StarWarsCharactersRP from "./examples/05/StarWarsCharacters";
import StarWarsCharactersRP1 from "./examples/06/App";
import StarWarsCharactersRP2 from "./examples/07/App";
import StarWarsCharactersRP3 from "./examples/08/App";
import StarWarsCharactersRP4 from "./examples/09/App";
// import Card2 from "./examples/ex2/RPExerciseCard";
import Card2 from "./examples/ex2/App"; // solution
import HookUseState from "./examples/10/HookUseState";
import HookUseEffect from "./examples/11/HookUseEffect";
import HookUseEffect2 from "./examples/12/HookUseEffect2";
import HookUseReducer from "./examples/13/HookUseReducer";
import CustomHook  from "./examples/14/CustomHook";
// import Card3 from "./examples/ex3/HookExerciseCard";
import Card3 from "./examples/ex3/Card"; // solution
import "./app.css";

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <div className="columns">
        <div className="column column is-3">
          <aside className="menu">
            <h2 className="menu-label">Examples</h2>
            <p className="menu-label">Higher-order components (HOC)</p>
            <ul className="menu-list">
              <li><NavLink to="/01" activeClassName="is-active">01</NavLink></li>
              <li><NavLink to="/02" activeClassName="is-active">02</NavLink></li>
              <li><NavLink to="/03" activeClassName="is-active">03</NavLink></li>
              <li><NavLink to="/04" activeClassName="is-active">04</NavLink></li>
              <li><NavLink to="/exhoc" activeClassName="is-active">exercise</NavLink></li>
            </ul>
            <p className="menu-label">Render props</p>
            <ul className="menu-list">
              <li><NavLink to="/05" activeClassName="is-active">05</NavLink></li>
              <li><NavLink to="/06" activeClassName="is-active">06</NavLink></li>
              <li><NavLink to="/07" activeClassName="is-active">07</NavLink></li>
              <li><NavLink to="/08" activeClassName="is-active">08</NavLink></li>
              <li><NavLink to="/09" activeClassName="is-active">09</NavLink></li>
              <li><NavLink to="/exrp" activeClassName="is-active">exercise</NavLink></li>
            </ul>
            <p className="menu-label">Hooks</p>
            <ul className="menu-list">
              <li><NavLink to="/10" activeClassName="is-active">10</NavLink></li>
              <li><NavLink to="/11" activeClassName="is-active">11</NavLink></li>
              <li><NavLink to="/12" activeClassName="is-active">12</NavLink></li>
              <li><NavLink to="/13" activeClassName="is-active">13</NavLink></li>
              <li><NavLink to="/14" activeClassName="is-active">14</NavLink></li>
              <li><NavLink to="/exhook" activeClassName="is-active">exercise</NavLink></li>
            </ul>
          </aside>
        </div>
        <div className="column column is-9">
          <h1 className="is-size-3">React React Masterclass</h1>
          <br />
          {/* Higher-order components (HOC) */}
          <Route exact path="/01" component={StarWarsCharacters} />
          <Route exact path="/02" component={HocStarWarsCharacters} />
          <Route exact path="/03" component={HocStarWarsCharacters2} />
          <Route exact path="/04" component={HocStarWarsCharacters3} />
          <Route exact path="/exhoc" component={() => <Card1 title="My card" />} />
          {/* Render props */}
          <Route exact path="/05" component={StarWarsCharactersRP} />
          <Route exact path="/06" component={StarWarsCharactersRP1} />
          <Route exact path="/07" component={StarWarsCharactersRP2} />
          <Route exact path="/08" component={StarWarsCharactersRP3} />
          <Route exact path="/09" component={StarWarsCharactersRP4} />
          <Route exact path="/exrp" component={() => <Card2 title="My card" />} />
          {/* Hooks */}
          <Route exact path="/10" component={HookUseState} />
          <Route exact path="/11" component={HookUseEffect} />
          <Route exact path="/12" component={HookUseEffect2} />
          <Route exact path="/13" component={HookUseReducer} />
          <Route exact path="/14" component={CustomHook} />
          <Route exact path="/exhook" component={() => <Card3 title="My card" />} /> 
        </div>
      </div>
    </div>
  </BrowserRouter>,
  document.getElementById("app")
);
