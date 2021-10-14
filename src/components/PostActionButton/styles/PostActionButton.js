import styled from 'styled-components/macro';
import palette from '../../../lib/styles/palette';
import Responsive from '../../common/Responsive';

export const StyledPostActionButton = styled(Responsive)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

export const StyledActionButton = styled.button`
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  outline: none;
  border: none;
  color: ${palette.gray[6]};
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: ${palette.gray[1]};
    color: ${palette.cyan[7]};
  }

  :not(:last-child) {
    margin-right: 0.5rem;
  }
`;
