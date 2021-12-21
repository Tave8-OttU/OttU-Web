import * as React from 'react';
import styled from 'styled-components';
interface props {
  type: string;
  price: string;
}
const PriceInfo: React.FC<props> = ({ type, price }) => {
  return (
    <Container className="row-container">
      <span>{type}</span>
      <Blue>{price}원</Blue>
    </Container>
  );
};
export default PriceInfo;
const Blue = styled.span`
  color: #45c7ff;
  font-weight: bold;
`;
const Container = styled.div`
  justify-content: space-between;
  border: solid thin #45c7ff;
  padding: 20px;
  border-radius: 10px;
  width: 250px;
  height: 30px;
`;
