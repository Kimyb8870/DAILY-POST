import styled from 'styled-components/macro';
import palette from '../../../lib/styles/palette';

export const StyledTagBox = styled.div`
  width: 100%;
  border-top: 1px solid ${palette.gray[2]};
  padding-top: 2rem;
  h4 {
    color: ${palette.gray[8]};
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

export const StyledTagForm = styled.form`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  width: 256px;
  border: 1px solid ${palette.gray[9]};

  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }

  input {
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
  }

  button {
    cursor: pointer;
    display: block;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    outline: none;
    background: ${palette.gray[8]};
    color: white;
  }
`;

export const StyledTagList = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

export const StyledTagItem = styled.div`
  cursor: pointer;
  color: ${palette.gray[6]};

  &:not(:last-child) {
    margin-right: 0.5rem;
  }

  &:hover {
    opacity: 0.5;
  }
`;
