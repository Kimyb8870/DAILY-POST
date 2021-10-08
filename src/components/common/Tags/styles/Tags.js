import styled from 'styled-components/macro';
import palette from '../../../../lib/styles/palette';

export const StyledTags = styled.div`
  margin-top: 0.5rem;

  .tag {
    display: inline-block;
    color: ${palette.cyan[7]};
    text-decoration: none;
    font-weight: 600;
    &:not(:last-child) {
      margin-right: 0.5rem;
    }

    &:hover {
      color: ${palette.cyan[6]};
    }
  }
`;
