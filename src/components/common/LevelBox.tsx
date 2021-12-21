import * as React from 'react';
import styled from 'styled-components';
import Gage from './Gage';
interface props {}
const LevelBox: React.FC<props> = ({}) => {
  return (
    <Container className="col-container">
      <span>오뜨 level</span>
      <Wrapper className="row-container">
        <Gage gage={50} />
        <h3>{5}</h3>
      </Wrapper>
    </Container>
  );
};
export default LevelBox;
const Container = styled.div`
  background-color: #00000075;
  border: solid thin #45c7ff;
  padding: 10px;
  border-radius: 5px;
  color: white;
  gap: 10px;
`;
const Wrapper = styled.div`
  gap: 10px;
  h3 {
    margin: 0;
    color: #45c7ff;
  }
`;
