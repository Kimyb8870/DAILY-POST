import styled, { css } from 'styled-components/macro';
import palette from '../../../../lib/styles/palette';

export const StyledSubInfo = styled.div`
  color: ${palette.gray[6]};

  span + span::before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }

  //marginTop by hasMarginTop
  ${(props) => {
    props.hasMarginTop &&
      css`
        margin-top: 1rem;
      `;
  }}
`;
