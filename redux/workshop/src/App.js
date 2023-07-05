import React, { useState } from "react";
import { Layout, Menu, Typography } from "antd";
import { Redux03, Redux04 } from "./demos/";

const { Header, Content } = Layout;
const { Title } = Typography;

const menu = [
  {
    key: "demo-1",
    label: "Demo 1",
  },
  {
    key: "demo-2",
    label: "Demo 2",
  },
  {
    key: "demo-3",
    label: "Demo 3",
  },
  {
    key: "demo-4",
    label: "Demo 4",
  },
];

const App = () => {
  const [selectedDemo, setSelectedDemo] = useState("demo-1");
  const selectDemo = (e) => {
    setSelectedDemo(e.key);
  };

  return (
    <Layout className="layout-container">
      <Header className="header">
        <h1>Redux</h1>
        <Menu
          theme="dark"
          mode="horizontal"
          overflowedIndicator={null}
          onClick={selectDemo}
          selectedKeys={[selectedDemo]}
          items={menu}
        />
      </Header>
      <Layout>
        <Content className="inner-content">
          {selectedDemo === "demo-1" && (
            <Title level={2}>01: Redux (plain) - "./demos/01/index.html"</Title>
          )}
          {selectedDemo === "demo-2" && (
            <Title level={2}>
              02: Redux (custom implementation) - "./demos/02/index.html"
            </Title>
          )}
          {selectedDemo === "demo-3" && <Redux03 />}
          {selectedDemo === "demo-4" && <Redux04 />}
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
  );
};

export default App;
