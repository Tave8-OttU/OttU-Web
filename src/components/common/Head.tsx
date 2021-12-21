import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo_s.png';
import alert from '../../assets/images/alert.png';
const Head: React.FC = () => {
  return (
    <Header className="row-container">
      <img src={logo} />
      <SideWrapper className="row-container">
        <img src={alert} />
        <FontAwesomeIcon icon={faUser} />
      </SideWrapper>
    </Header>
  );
};
export default Head;

const Header = styled.header`
  background-color: #00000050;
  img {
    width: 60px;
    padding: 20px 30px;
  }
`;
const SideWrapper = styled.div`
  flex: 1;
  justify-content: flex-end;
  gap: 15px;
  img {
    width: 24px;
  }
  font-size: 20px;
  margin-right: 30px;
`;
