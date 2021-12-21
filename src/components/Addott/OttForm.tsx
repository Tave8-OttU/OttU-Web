import * as React from 'react';
import styled from 'styled-components';
import { Otts } from '../../assets/Objects/otts';
const OttForm: React.FC = () => {
  return (
    <Container>
      <span>OTT 선택</span>
      <OttWrapper>
        {Otts.map((ott) => (
          <OttContainer>
            <img
              src={require('../../assets/images/' + ott + '.png').default}
              width="50%"
            />
          </OttContainer>
        ))}
      </OttWrapper>
    </Container>
  );
};
export default OttForm;
const OttWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 250px);
  gap: 50px;
  margin-top: 50px;
`;
const Container = styled.div``;
const OttContainer = styled.div`
  background-color: white;
  width: 250px;
  height: 135px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 20px 20px 20px 10px #00000025;
  cursor: pointer;
`;
