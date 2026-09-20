import Tabs from "./Tabs";

const App = () => (
  <div>
    <h1 className="demo-title">CC 03: Compound components</h1>
    <hr className="demo-divider" />
    <Tabs>
      <Tabs.TabPane title="Tab 1">
        <h2>First Tab</h2>
        <p>My first tab content</p>
      </Tabs.TabPane>
      <Tabs.TabPane title="Tab 2">
        <h2>Second Tab</h2>
        <p>My second tab content</p>
      </Tabs.TabPane>
      <Tabs.TabPane title="Tab 3">
        <h2>Third Tab</h2>
        <p>My third tab content</p>
      </Tabs.TabPane>
    </Tabs>
  </div>
);

export default App;
