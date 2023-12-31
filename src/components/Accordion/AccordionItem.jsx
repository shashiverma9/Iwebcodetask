import React from "react";

const AccordionItem = ({ isOpen, title, toggleAccordion }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        {title}
        <span className={`dropdown-icon ${isOpen ? "open" : ""}`}>&#9660;</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
            <div className="APY-header">
                <h3 className="toggle-heading">APY</h3>
                <span className="price-tag">63.34%</span>
            </div>
          <p className="label-text">. Calculated based on current rates</p>
          <p className="label-text">
            . All fugures are estimates provided for your convenience only, and
            by no means represent guaranted returns.
          </p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
