import React from 'react';
import Accordian from '../components/Accordian/Accordian';
import AccordianData from '../components/Accordian/AccordianData.json';

function AccordianPage() {
  return (
    <div className="App">
        <h2>Accordian Page</h2>
        <Accordian data={AccordianData} />
    </div>
  );
}

export default AccordianPage;