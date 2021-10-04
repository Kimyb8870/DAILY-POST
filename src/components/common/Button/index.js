import React from 'react';
import { withRouter } from 'react-router';
import { StyledButton } from './styles/Button';

const Button = ({ to, history, ...restProps }) => {
  const onClick = (e) => {
    if (to) {
      history.push(to);
    }
    if (restProps.onClick) {
      restProps.onClick(e);
    }
  };

  return <StyledButton onClick={onClick} {...restProps} />;
};

export default withRouter(Button);
