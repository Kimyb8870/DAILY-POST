import React from 'react';
import { StyledResponsive } from './styles/Responsive';

const Responsive = ({ children, ...restProps }) => {
  return <StyledResponsive {...restProps}>{children}</StyledResponsive>;
};

export default Responsive;
