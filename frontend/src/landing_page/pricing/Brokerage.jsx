import { useState } from "react";
import { brokerageData } from "./brokerageData";
import Tabs from "./Tabs";
import BrokerageTable from "./BrokerageTable";
import '../styles/pricing/Brokerage.css'

const Brokerage = () => {
  const [activeTab, setActiveTab] = useState("equity");

  return (
    <div className="container">
      {/* Tabs row */}
      <div className="row">
        <div className="col-12">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>

      {/* Table row */}
      <div className="row ">
        <div className="col-12">
          <BrokerageTable data={brokerageData[activeTab]} />
        </div>
      </div>
      <div className="brokerage-calc">
      <p><a href="">Calculate your costs upfront</a> using our brokerage calculator</p>
      </div>
    </div>
  );
};

export default Brokerage;
