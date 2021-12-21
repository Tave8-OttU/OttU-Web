import * as React from 'react';
import styled from 'styled-components';
import { BlueBtn, GrayBtn } from '../common/Buttons';
interface props {
  nickname: string;
  isJoin: boolean;
}
const JoinList: React.FC<props> = ({ nickname, isJoin }) => {
  return (
    <Container className="row-container">
      <span>{nickname}</span>
      {isJoin ? <GrayBtn>수락취소</GrayBtn> : <BlueBtn>수락</BlueBtn>}
    </Container>
  );
};
export default JoinList;
const Container = styled.div`
  justify-content: space-between;
  border: solid thin #e2e2e2;
  padding: 10px;
  border-radius: 5px;
  font-size: small;
  button {
    color: white;
  }
`;
