import * as React from 'react';
import styled from 'styled-components';
import { BlueBorderBtn } from '../common/Buttons';
import DateBox from '../common/DateBox';
import { BlueLabel } from '../common/Labels';
import NickName from '../common/NickName';
import CruitAlert from './CruitAlert';
import JoinAlert from './JoinAlert';
const Post: React.FC = () => {
  const isWriter = true;
  const [isOpen, setIsOpen] = React.useState(false);
  const oClickJoinHandler = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Container className="row-container">
        <Body className="col-container">
          <NickName nickname={'닉네임'} />
          <Wrapper>
            <BlueLabel>모집 중</BlueLabel>
            <Count>
              2 <span>/ {4}</span>
            </Count>
          </Wrapper>
        </Body>
        <Side className="col-container">
          <DateBox dateString={'2021.01.02'} />
          <BlueBorderBtn onClick={oClickJoinHandler}>참여하기</BlueBorderBtn>
        </Side>
      </Container>
      {isOpen &&
        (isWriter ? (
          <CruitAlert setIsOpen={setIsOpen} />
        ) : (
          <JoinAlert setIsOpen={setIsOpen} />
        ))}
    </>
  );
};
export default Post;
const Wrapper = styled.div`
  span {
    padding: 5px 20px;
    border-radius: 5px;
  }
`;
const Side = styled.div`
  flex: 1;
  gap: 30px;
  align-items: flex-end;
`;
const Body = styled.div`
  gap: 30px;
`;
const Container = styled.div`
  background-color: #00000030;
  font-size: small;
  padding: 20px;
`;
export const Count = styled.span`
  font-size: medium;
  span {
    padding: 0;
    font-size: x-large;
    color: #45c7ff;
  }
`;
