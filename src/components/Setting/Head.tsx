import * as React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo_s.png';
const Head: React.FC = () => {
  return (
    <Header>
      <img src={logo} />
    </Header>
  );
};
export default Head;

const Header = styled.header`
  background-color: #00000050;
  img {
    width: 80px;
    padding: 10px 20px;
  }
`;
