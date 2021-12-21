import * as React from 'react';
import styled from 'styled-components';
interface props {
  nickname: string;
  kakao_id: string;
}
const MemberList: React.FC<props> = ({ nickname, kakao_id }) => {
  return (
    <Container className="row-container">
      <h4>{nickname}</h4>
      <IdBox className="row-container">
        <span>카카오 아이디</span>
        {kakao_id}
      </IdBox>
    </Container>
  );
};
export default MemberList;
const Container = styled.div`
  h4 {
    margin: 0;
    margin-right: 10px;
  }
`;
const IdBox = styled.div`
  font-size: small;
  padding: 10px;
  border: solid thin #e2e2e2;
  border-radius: 5px;
  font-weight: lighter;
  span {
    font-weight: bold;
    margin-right: 20px;
  }
`;
