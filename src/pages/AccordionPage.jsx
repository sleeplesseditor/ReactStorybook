import React from 'react';
import Accordion from '../components/Accordion/Accordion';
import AccordionData from '../components/Accordion/AccordionData.json';

function AccordionPage() {
  return (
    <div className="App">
        <h2>Accordion Page</h2>
        <Accordion data={AccordionData} />
    </div>
  );
}

export default AccordionPage;