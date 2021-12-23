import * as React from 'react';
import styled from 'styled-components';
import { BlueBtn } from '../components/common/Buttons';
import Head from '../components/Setting/Head';
import SettingForm from '../components/Setting/SettingForm';
import logo from '../assets/images/logo_s.png';
const Setting: React.FC = () => {
  const [infoObj, setInfoObj] = React.useState({
    nickname: '',
    kakaotalk_id: '',
  });
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    setInfoObj((p) => ({ ...p, [name]: value }));
  };
  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    try {
    } catch (err) {}
  };
  const [interestArr, setInterestArr] = React.useState<string[]>([]);
  return (
    <Container>
      <Head />
      <Form onSubmit={onSubmitHandler}>
        <TextWrapper>
          <h1>서비스 이용을 위한 기본 정보를 기입해주세요.</h1>
          <BlueBtn type="submit">완료</BlueBtn>
          <img src={logo} />
        </TextWrapper>
        <Wrapper className="container">
          <SettingForm
            infoObj={infoObj}
            onChangeHandler={onChangeHandler}
            interestArr={interestArr}
            setInterestArr={setInterestArr}
          />
        </Wrapper>
      </Form>
    </Container>
  );
};
export default Setting;

const Container = styled.div`
  background-image: url('bg.png');
  background-position: center bottom;
  background-repeat: no-repeat;
  height: 100vh;
`;
const TextWrapper = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  button {
    padding: 15px 60px;
    font-size: large;
    box-shadow: 10px 10px 20px 10px #45c7ff10;
  }
  img {
    position: absolute;
    bottom: 100px;
    left: 100px;
    width: 200px;
  }
  h1 {
    font-weight: lighter;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;
const Wrapper = styled.div`
  gap: 50px;
  flex: 0.5;
  h1 {
    font-weight: lighter;
  }
`;
