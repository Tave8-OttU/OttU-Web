import * as React from 'react';
import styled from 'styled-components';
import { WhiteRoundBtn } from '../common/Buttons';

interface props {
  nickname: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}
const NickNameForm: React.FC<props> = ({ nickname, onChangeHandler }) => {
  const onCheckHandler = () => {};
  return (
    <Container className="col-container">
      <span>닉네임</span>
      <Wrapper className="row-container">
        <input
          type="text"
          placeholder="닉네임"
          name="nickname"
          value={nickname}
          onChange={onChangeHandler}
        />
        <WhiteRoundBtn type="button">중복 확인</WhiteRoundBtn>
      </Wrapper>
    </Container>
  );
};
export default NickNameForm;
const Container = styled.div`
  gap: 20px;
  width: 100%;
`;
const Wrapper = styled.div`
  button {
    font-size: small;
    margin-left: 10px;
    color: black;
  }
  input[type='text'] {
    border-bottom: solid thin #45c7ff;
    padding: 10px;
    font-size: small;
    width: 200px;
  }
`;
