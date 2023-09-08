import React, { useState } from "react";
import {
  CAKE_INFO,
  ENABLE_ACCELERATED_APY,
  FROM_HEADING,
  ROI_RATE,
  SELECT_TIER,
  TIMEFRAME_LABEL,
} from "../../utils/Label";
import ToggleButton from "../ToggleButton/ToggleButton";
import FormInput from "../FormInput/FormInput";
import data from "../../assets/data/data";
import tierData from "../../assets/data/tierData";
import ToggleApy from "../ToggleButton/ToggleApy";
import timeframeData from "../../assets/data/timeframeData";
import Accordion from "../Accordion/Accordion";

const Form = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTier, setActiveTier] = useState(0);
  const [activeDay, setActiveDay] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showIcon,setShowIcon]=useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (index) => {
    setActiveTab(index);
  };
  const handleClickTier = (index) => {
    setActiveTier(index);
  };
  const handleClickDays = (index) => {
    setActiveDay(index);
  };

// handle submit 
const handleSubmit=()=>{
    setShowIcon(!showIcon);

}


  return (
    <div className="form-container">
      <div className="form-header">
        <h3>{FROM_HEADING}</h3>
        <div className="close-btn">X</div>
      </div>
      <div className="cake-input-section">
        <div className="cake-section">
          <img src="cakeicon.svg" alt="" />
          <p>cake</p>
        </div>
        <div className="currency-toggle">
          <div className="toggle-wrapper">
            <ToggleButton />
          </div>
          <p>USD</p>
        </div>
      </div>
      <FormInput />
      <div className="tab-main">
        <div className={`tab-container`}>
          {data &&
            data.length &&
            data.map((item, id) => {
              return (
                <div
                  key={id}
                  onClick={(e) => handleClick(id)}
                  className={`tab-wrapper ${
                    activeTab === id ? "active" : "nonactive"
                  }`}
                >
                  <p className="tab-data">{item.data}</p>
                </div>
              );
            })}
        </div>
        <label className="price-label">~ $20.82</label>
      </div>
      <div>
        <p>{TIMEFRAME_LABEL}</p>
        <div className={`timeframe-container`}>
          {timeframeData &&
            timeframeData.length &&
            timeframeData.map((item, id) => {
              return (
                <div
                  key={id}
                  onClick={(e) => handleClickDays(id)}
                  className={`timeframe-wrapper ${
                    activeDay === id ? "activetime" : "nonactivetime"
                  }`}
                >
                  <p
                    className={`timeframe-data ${
                      activeDay === id ? "activeday" : "nonactiveday"
                    }`}
                  >
                    {item.days}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <div className="enable-apy-container">
        <h4 className="enable-label">{ENABLE_ACCELERATED_APY}</h4>
        <ToggleApy />
      </div>
      <div className="select-tier-container">
        <p className="select-tier">{SELECT_TIER}</p>
        <div className={`timeframe-container`}>
          {tierData &&
            tierData.length &&
            tierData.map((item, id) => {
              return (
                <div
                  key={id}
                  onClick={(e) => handleClickTier(id)}
                  className={`timeframe-wrapper ${
                    activeTier === id ? "activetime" : "nonactivetime"
                  }`}
                >
                  <p className="tier-data">{item.tierName}</p>
                </div>
              );
            })}
        </div>
      </div>
      <div className="roi-wrapper">
        <span className="roi-label">{ROI_RATE}</span>
      </div>
      <FormInput showIcon={showIcon} />
      <div className="cake-info-wrapper">
        <span className="cake-info-label">{CAKE_INFO}</span>
      </div>
      <div className="button-wrapper">
        <button className="submit-btn" onClick={(e) => handleSubmit(e)}>
          Apply
        </button>
        <button className="cancel-btn" onClick={(e) => handleCancel(e)}>
          Cancel
        </button>
      </div>
      <div>
        <Accordion toggleAccordion={toggleAccordion} isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Form;
