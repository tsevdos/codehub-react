import Tabs from "./Tabs";

const tabsEntries = [
  {
    title: "Tab 1",
    content: (
      <>
        <h2>First Tab</h2>
        <p>My first tab content</p>
      </>
    ),
  },
  {
    title: "Tab 2",
    content: (
      <>
        <h2>Second Tab</h2>
        <p>My second tab content</p>
      </>
    ),
  },
  {
    title: "Tab 3",
    content: (
      <>
        <h2>Third Tab</h2>
        <p>My third tab content</p>
      </>
    ),
  },
];

const App = () => (
  <div>
    <h1 className="text-2xl font-bold text-gray-800">CC 01: Starting point</h1>
    <hr className="my-3" />
    <Tabs tabs={tabsEntries} />
  </div>
);

export default App;
