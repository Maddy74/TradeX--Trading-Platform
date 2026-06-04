import '../styles/pricing/Tabs.css'
const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["Equity", "Currency", "Commodity"];

  return (
    <div className="tabs-outer">
    <div className="tabs-wrapper">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-item ${
            activeTab === tab.toLowerCase() ? "active" : ""
          }`}
          onClick={() => setActiveTab(tab.toLowerCase())}
        >
          {tab}
        </button>
      ))}
    </div>
    </div>
  );
};

export default Tabs;
