import * as React from 'react';
import styled from 'styled-components';
import { WhiteRoundBtn } from '../common/Buttons';
export interface infoFormprops {
  infoObj: {
    nickname: string;
    kakaotalk_id: string;
  };
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}
const NickNameForm: React.FC<infoFormprops> = ({
  infoObj,
  onChangeHandler,
}) => {
  const onCheckHandler = () => {};
  return (
    <Container className="col-container">
      <span>닉네임</span>
      <Wrapper>
        <input
          type="text"
          placeholder="닉네임"
          name="nickname"
          value={infoObj.nickname}
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
`;
const Wrapper = styled.div`
  button {
    font-size: small;
    margin-left: 10px;
    color: black;
  }
`;
