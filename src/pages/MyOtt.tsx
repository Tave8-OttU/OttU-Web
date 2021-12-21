import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from 'styled-components';
import Head from '../components/common/Head';
import Content from '../components/MyOtt/Content';
import OttContainer from '../components/MyOtt/OttContainer';
const MyOtt: React.FC = () => {
  const { ott } = useParams();
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate('/addott');
  };
  return (
    <Container>
      <Head />
      <Label>나의 OTT</Label>
      <Body>
        <OttContainer ott={ott} />
        <Content />
      </Body>
      <WriteBtn onClick={onClickHandler}>
        <FontAwesomeIcon icon={faPlus} />
      </WriteBtn>
    </Container>
  );
};
export default MyOtt;
const Container = styled.div``;
const Body = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 50px;
  gap: 50px;
`;
const Label = styled.div`
  background-color: #00000020;
  margin: 50px;
  padding: 30px;
  border-radius: 10px;
  color: #45c7ff;
`;
const WriteBtn = styled.button`
  position: fixed;
  background-color: #5d5d5d;
  bottom: 50px;
  right: 50px;
  font-size: 25px;
  color: #45c7ff;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 20px 20px 20px 10px #00000025;
`;
