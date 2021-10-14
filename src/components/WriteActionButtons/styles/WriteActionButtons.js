import styled from 'styled-components/macro';
import Button from '../../common/Button';

export const StyledWriteActionButtons = styled.div`
  margin-top: 2rem;
  padding-bottom: 3rem;

  button + button {
    margin-left: 0.5rem;
  }
`;

export const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;
