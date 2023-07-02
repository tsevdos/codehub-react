import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, Typography } from "antd";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
// Demos
// SSC
import {
  CharactersList,
  CharactersListContainer,
  CharactersListContainer2,
  UserCard,
} from "./examples/SSC/";
// RP
import {
  CharactersListRP,
  CharactersListRP2,
  CharactersListRP3,
  CharactersListRP4,
  CharactersListRP5,
  RPUserCard,
} from "./examples/RP";
// Custom hooks
import {
  CharactersListCH,
  CharactersListCH2,
  CharactersListCH3,
  CharactersListCH4,
  CHUserCard,
} from "./examples/hooks";
// Compound components
import { CCApp1, CCApp2, CCApp3, CCApp4 } from "./examples/CC";

const { Content } = Layout;
const { Title } = Typography;

const App = () => {
  return (
    <Router>
      <Layout>
        <Header />
        <Layout>
          <Sidebar />
          <Content className="inner-content">
            <Routes>
              <Route path="/" element={<Title>Demos</Title>} />
              {/* SSC */}
              <Route path="/ssc/1" element={<CharactersList />} />
              <Route path="/ssc/2" element={<CharactersListContainer />} />
              <Route path="/ssc/3" element={<CharactersListContainer2 />} />
              <Route
                path="/ssc/exercise"
                element={<UserCard title="My user card!" />}
              />
              {/* RP */}
              <Route path="/rp/1" element={<CharactersListRP />} />
              <Route path="/rp/2" element={<CharactersListRP2 />} />
              <Route path="/rp/3" element={<CharactersListRP3 />} />
              <Route path="/rp/4" element={<CharactersListRP4 />} />
              <Route path="/rp/5" element={<CharactersListRP5 />} />
              <Route
                path="/rp/exercise"
                element={<RPUserCard title="My user card!" />}
              />
              {/* Custom hooks */}
              <Route path="/ch/1" element={<CharactersListCH />} />
              <Route path="/ch/2" element={<CharactersListCH2 />} />
              <Route path="/ch/3" element={<CharactersListCH3 />} />
              <Route path="/ch/4" element={<CharactersListCH4 />} />
              <Route
                path="/ch/exercise"
                element={<CHUserCard title="My user card!" />}
              />
              {/* Compound Components */}
              <Route path="/cc/1" element={<CCApp1 />} />
              <Route path="/cc/2" element={<CCApp2 />} />
              <Route path="/cc/3" element={<CCApp3 />} />
              <Route path="/cc/4" element={<CCApp4 />} />
            </Routes>
            <footer>
              Made with{" "}
              <span role="img" aria-label="love">
                ❤️
              </span>{" "}
              in Athens, Greece.
            </footer>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
