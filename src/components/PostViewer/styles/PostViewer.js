import styled from 'styled-components/macro';
import palette from '../../../lib/styles/palette';
import Responsive from '../../common/Responsive';

export const StyledPostViewer = styled(Responsive)`
  margin-top: 4rem;
`;

export const PostHead = styled.div`
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid ${palette.gray[2]};

  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

export const PostBody = styled.div`
  font-size: 1.25rem;
  color: ${palette.gray[8]};
`;
