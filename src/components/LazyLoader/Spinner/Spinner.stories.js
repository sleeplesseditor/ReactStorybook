import React, { Fragment } from 'react';
import Spinner from './Spinner';

export default {
  title: 'Design System|Atoms/Spinner',
  parameters: {
    component: Spinner,
    componentSubtitle: 'Basic loading spinner'
  }
};

export const Basic = () => (
  <Fragment>
    <Spinner />
  </Fragment>
);