import Tabs from "./Tabs";

const tabsEntries = [
  {
    tabTitle: "Tab 1",
    title: "First Tab",
    content: "My first tab content",
  },
  {
    tabTitle: "Tab 2",
    title: "Second Tab",
    content: "My second tab content",
  },
  {
    tabTitle: "Tab 3",
    title: "Third Tab",
    content: "My third tab content",
  },
];

const App = () => (
  <div>
    <h1 className="demo-title">CC 01: Starting point</h1>
    <hr className="demo-divider" />
    <Tabs tabs={tabsEntries} />
  </div>
);

export default App;
