import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
// Demos
// SSC
import CharactersList from "./examples/SSC/01/CharactersList";
import CharactersListContainer from "./examples/SSC/02/CharactersListContainer";
import CharactersListContainer2 from "./examples/SSC/03/CharactersListContainer";
import UserCard from "./examples/SSC/exercise/UserCard";
// RP
import CharactersListRP from "./examples/RP/01/CharactersList";
import CharactersListRP2 from "./examples/RP/02/App";
import CharactersListRP3 from "./examples/RP/03/App";
import CharactersListRP4 from "./examples/RP/04/App";
import CharactersListRP5 from "./examples/RP/05/App";
import RPUserCard from "./examples/RP/exercise/UserCard";
// Custom hooks
import CharactersListCH from "./examples/hooks/01/CharactersList";
import CharactersListCH2 from "./examples/hooks/02/CharactersList";
import CharactersListCH3 from "./examples/hooks/03/CharactersList";
import CharactersListCH4 from "./examples/hooks/04/CharactersList";
import CHUserCard from "./examples/hooks/exercise/UserCard";
// Compound components
import CCApp1 from "./examples/CC/01/App";
import CCApp2 from "./examples/CC/02/App";
import CCApp3 from "./examples/CC/03/App";
import CCApp4 from "./examples/CC/04/App";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="grid grid-cols-12">
        <Sidebar />
        <main className="col-span-9 py-6">
          <Routes>
            <Route path="/" element={<h1>Demos</h1>} />
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
        </main>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
