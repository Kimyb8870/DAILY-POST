import styled from 'styled-components/macro';
import Responsive from '../../Responsive';

export const StyledHeader = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
`;

export const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

export const Spacer = styled.div`
  height: 4rem;
`;

export const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;
