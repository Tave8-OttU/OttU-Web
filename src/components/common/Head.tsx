import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo_s.png';
import alert from '../../assets/images/alert.png';
import Profile from '../Profile/Profile';
import { Link } from 'react-router-dom';
import Alert from '../Alert/Alert';
const Head: React.FC = () => {
  const [isProfile, setIsProfile] = React.useState(false);
  const [isAlert, setIsAlert] = React.useState(false);
  return (
    <>
      <Header className="row-container">
        <Link to="/main">
          <img src={logo} />
        </Link>
        <SideWrapper className="row-container">
          <img src={alert} onClick={() => setIsAlert(true)} />
          <FontAwesomeIcon icon={faUser} onClick={() => setIsProfile(true)} />
        </SideWrapper>
      </Header>
      {isAlert && <Alert setIsOpen={setIsAlert} />}
      {isProfile && <Profile setIsOpen={setIsProfile} />}
    </>
  );
};
export default Head;

const Header = styled.header`
  background-color: #00000050;
  img {
    width: 60px;
    padding: 20px 30px;
    cursor: pointer;
  }
  position: sticky;
  top: 0;
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
  * {
    cursor: pointer;
  }
`;
