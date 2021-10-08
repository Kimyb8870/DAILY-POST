import styled from 'styled-components/macro';
import palette from '../../../lib/styles/palette';
import Responsive from '../../common/Responsive';

export const StyledPostList = styled(Responsive)`
  margin-top: 3rem;
`;

export const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

export const StyledPostItem = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;

  &:first-child {
    padding-top: 0;
  }

  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }

  p {
    margin-top: 2rem;
  }
`;
