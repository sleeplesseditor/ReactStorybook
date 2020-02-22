import React, { Fragment } from 'react';
import Accordian from './Accordian';
import AccordianData from './AccordianData.json';


export default {
  title: 'Design System|Atoms/Accordian',
  parameters: {
    component: Accordian,
    componentSubtitle: 'Basic accordian system'
  }
};

export const Basic = () => (
  <Fragment>
    <Accordian data={AccordianData} />
  </Fragment>
);