import * as React from 'react';
import styled from 'styled-components';
import DateBoxForm from '../components/Addott/DateBoxForm';
import OttForm from '../components/Addott/OttForm';
import PriceBoxForm from '../components/Addott/PriceBoxForm';
import { BlueBtn } from '../components/common/Buttons';
import Head from '../components/common/Head';
const AddOtt: React.FC = () => {
  const [platform, setPlatform] = React.useState(-1);
  return (
    <Container>
      {/* 
      <Head />
      <Body>
        <Wrapper className="col-container">
          <OttForm platform={platform} setPlatform={setPlatform} />
        </Wrapper>
        <Wrapper className="col-container">
          <BlueBtn>추가</BlueBtn>
          <PriceBoxForm platform={platform} />
          <DateBoxForm />
        </Wrapper>
      </Body> */}
    </Container>
  );
};
export default AddOtt;
const Wrapper = styled.div`
  span {
    font-weight: bold;
  }
  button {
    width: 100px;
    text-align: center;
    align-self: flex-end;
    margin-bottom: 30px;
  }
`;
const Container = styled.div``;
const Body = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px;
  gap: 50px;
  background-color: #1a1a1a;
  margin: 50px;
  border-radius: 10px;
  box-shadow: 20px 20px 20px 10px #00000025;
`;
