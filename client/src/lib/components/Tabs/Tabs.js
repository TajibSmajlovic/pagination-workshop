import { useState } from "react";

import "./Tabs.css";

export const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className='tabs'>
      <div className='tab-list'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className='tab-content'>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane ${activeTab === tab.id ? "active" : ""}`}
          >
            {<tab.Component />}
          </div>
        ))}
      </div>
    </div>
  );
};
