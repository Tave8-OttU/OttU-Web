import axios from 'axios';
import * as React from 'react';
import styled from 'styled-components';
import { WhiteRoundBtn } from '../common/Buttons';

interface props {
  nickname: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}
const NickNameForm: React.FC<props> = ({ nickname, onChangeHandler }) => {
  const [isExisted, setIsExisted] = React.useState(false);
  const [notice, setNotice] = React.useState('');
  const onCheckHandler = () => {
    axios.get(`/user/nickname/${nickname}`).then((res) => {
      setIsExisted(res.data.isExisted);
      res.data.isExited
        ? setNotice('이미 사용 중인 닉네임입니다.')
        : setNotice('사용 가능합니다.');
    });
  };
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
        <WhiteRoundBtn type="button" onClick={onCheckHandler}>
          중복 확인
        </WhiteRoundBtn>
      </Wrapper>
      <Notice isRed={isExisted}>{notice}</Notice>
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
const Notice = styled.span<{ isRed: boolean }>`
  font-size: x-small;
  color: #45c7ff;
  margin-left: 10px;
  ${(props) => props.isRed && `color:#ee6a61`}
`;
