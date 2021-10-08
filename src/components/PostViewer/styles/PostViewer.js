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

export const SubInfo = styled.div`
  margin-top: 1rem;
  color: ${palette.gray[6]};

  span + span::before {
    color: ${palette.gray[5]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
`;

export const Tags = styled.div`
  display: flex;
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

export const PostBody = styled.div`
  font-size: 1.25rem;
  color: ${palette.gray[8]};
`;
