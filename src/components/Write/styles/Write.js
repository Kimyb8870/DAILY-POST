import styled from 'styled-components/macro';
import Responsive from '../../common/Responsive';
import palette from '../../../lib/styles/palette';

export const StyledWrite = styled(Responsive)`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

export const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  width: 100%;
`;

export const QuillWrapper = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }

  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;
