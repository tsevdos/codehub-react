import { useState } from "react";
import TabsNavItem from "./TabsNavItem";
import TabsContent from "./TabsContent";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const onSelectTab = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="tabs">
      <nav className="tab-nav">
        {tabs.length &&
          tabs.map(({ tabTitle }, index) => (
            <TabsNavItem
              key={index}
              index={index}
              title={tabTitle}
              isActive={activeTab === index}
              onSelectTab={onSelectTab}
            />
          ))}
      </nav>
      <section id="content">
        {tabs.length &&
          tabs.map(({ title, content }, index) => (
            <TabsContent key={index} index={index} title={title} content={content} isVisible={activeTab === index} />
          ))}
      </section>
    </section>
  );
};

export default Tabs;
