import * as React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Otts } from '../assets/Objects/otts';
import Head from '../components/common/Head';

const Main: React.FC = () => {
  const navigate = useNavigate();
  const onClickHandler = (event: React.MouseEvent) => {
    const {
      currentTarget: { id },
    } = event;
    //navigate(`/myott/${id}`);
    navigate(`/recruit/${id}`);
  };
  return (
    <Container>
      <Head />
      <Body>
        <Wrapper>
          {Otts.map((ott) => (
            <OttContainer onClick={onClickHandler} id={ott}>
              <img
                src={require('../assets/images/' + ott + '.png').default}
                width="200px"
              />
            </OttContainer>
          ))}
        </Wrapper>
      </Body>
    </Container>
  );
};
export default Main;

const Container = styled.div`
  background-image: url('bg.png');
  background-position: center bottom;
  background-repeat: no-repeat;
  height: 100vh;
`;
const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 350px);
  gap: 50px;
`;
const OttContainer = styled.div`
  background-color: white;
  width: 350px;
  height: 185px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 20px 20px 20px 10px #00000025;
  cursor: pointer;
`;
