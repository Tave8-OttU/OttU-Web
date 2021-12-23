import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const MyOttU: React.FC = () => {
  return (
    <Container>
      <h3>나의 OttU</h3>
      <Menu className="col-container">
        <Link to="">내가 작성한 모집글 </Link>
        <Link to="">내가 이용하는 OTT 서비스 </Link>
      </Menu>
    </Container>
  );
};
export default MyOttU;
const Menu = styled.div`
  font-size: small;
  background-color: #00000075;
  border: solid thin #45c7ff;
  padding: 20px;
  border-radius: 5px;
  color: white;
  gap: 20px;
`;
const Container = styled.div``;
