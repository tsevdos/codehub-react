import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { DeploymentUnitOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const menuItems = [
  {
    key: "ssc",
    label: "SSC",
    icon: <DeploymentUnitOutlined />,
    children: [
      {
        key: "/ssc/1",
        label: <Link to="/ssc/1">01: Starting Point</Link>,
      },
      {
        key: "/ssc/2",
        label: <Link to="/ssc/2">02: Stateful and stateless components</Link>,
      },
      {
        key: "/ssc/3",
        label: <Link to="/ssc/3">03: Stateful and stateless components</Link>,
      },
      {
        key: "/ssc/exercise",
        label: <Link to="/ssc/exercise">SSC exercise</Link>,
      },
    ],
  },
  {
    key: "rp",
    label: "Render props",
    icon: <DeploymentUnitOutlined />,
    children: [
      {
        key: "/rp/1",
        label: <Link to="/rp/1">01: Starting Point</Link>,
      },
      {
        key: "/rp/2",
        label: <Link to="/rp/2">02: Render prop</Link>,
      },
      {
        key: "/rp/3",
        label: <Link to="/rp/3">03: Render prop with many props</Link>,
      },
      {
        key: "/rp/4",
        label: <Link to="/rp/4">04: Render prop with multiple arguments</Link>,
      },
      {
        key: "/rp/5",
        label: <Link to="/rp/5">05: Children render prop</Link>,
      },
      {
        key: "/rp/exercise",
        label: <Link to="/rp/exercise">RP exercise</Link>,
      },
    ],
  },
  {
    key: "ch",
    label: "Custom hooks",
    icon: <DeploymentUnitOutlined />,
    children: [
      {
        key: "/ch/1",
        label: <Link to="/ch/1">01: Starting Point</Link>,
      },
      {
        key: "/ch/2",
        label: <Link to="/ch/2">02: Custom hook</Link>,
      },
      {
        key: "/ch/3",
        label: <Link to="/ch/3">03: Pass parameters to custom hook</Link>,
      },
      {
        key: "/ch/4",
        label: <Link to="/ch/4">04: Return more complex data</Link>,
      },
      {
        key: "/ch/exercise",
        label: <Link to="/ch/exercise">CH exercise </Link>,
      },
    ],
  },
  {
    key: "cc",
    label: "Compound Components",
    icon: <DeploymentUnitOutlined />,
    children: [
      {
        key: "/cc/1",
        label: <Link to="/cc/1">01: Starting point</Link>,
      },
      {
        key: "/cc/2",
        label: <Link to="/cc/2">02: Component composition</Link>,
      },
      {
        key: "/cc/3",
        label: <Link to="/cc/3">03: Compound components</Link>,
      },
      {
        key: "/cc/4",
        label: <Link to="/cc/4">04: Compound components</Link>,
      },
    ],
  },
];

const Sidebar = () => (
  <Sider width={200}>
    <Menu mode="inline" style={{ height: "100%" }} items={menuItems} />
  </Sider>
);

export default Sidebar;
