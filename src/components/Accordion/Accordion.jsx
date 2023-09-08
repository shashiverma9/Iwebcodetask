import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import './index.scss';

const Accordion = ({isOpen,toggleAccordion}) => {
    


  return (
    <div className="accordion">
      <AccordionItem isOpen={isOpen} title={`${isOpen?"hide details":"show details"}`} toggleAccordion={toggleAccordion}/>
    </div>
  );
};

export default Accordion;
