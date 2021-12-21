import * as React from 'react';
import styled from 'styled-components';
const PriceBoxForm: React.FC = () => {
  return (
    <Container>
      <span>요금제 선택</span>
      <Wrapper className="row-container">
        <Box>
          <span>베이식</span>
          <span>14,900원</span>
        </Box>
        <Box>
          <span>베이식</span>
          <span>14,900원</span>
        </Box>
        <Box>
          <span>베이식</span>
          <span>14,900원</span>
        </Box>
      </Wrapper>
    </Container>
  );
};
export default PriceBoxForm;
const Container = styled.div`
  background-color: #00000030;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 50px;
`;
const Wrapper = styled.div`
  gap: 20px;
`;
const Box = styled.div`
  background-color: #00000030;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 150px;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
`;
