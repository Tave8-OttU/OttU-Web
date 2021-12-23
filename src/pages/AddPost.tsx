import * as React from 'react';
import styled from 'styled-components';
import OttForm from '../components/AddOtt/OttForm';
import PriceBoxForm from '../components/AddOtt/PriceBoxFrom';
import ExplainBox from '../components/AddPost/ExplainBox';
import { BlueBtn } from '../components/common/Buttons';
import Head from '../components/common/Head';
const AddPost: React.FC = () => {
  return (
    <Container>
      <Head />
      <Body>
        <Wrapper className="col-container">
          <OttForm />
        </Wrapper>
        <Wrapper className="col-container">
          <BlueBtn>작성</BlueBtn>
          <PriceBoxForm />
          <ExplainBox />
        </Wrapper>
      </Body>
    </Container>
  );
};
export default AddPost;
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
