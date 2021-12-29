import * as React from 'react';
import styled from 'styled-components';
import BtnGroup from '../Recruit/BtnGroup';
import CruitAlert from '../Recruit/CruitAlert';
import JoinAlert from '../Recruit/JoinAlert';
import DateBox from './DateBox';
import { BlueLabel } from './Labels';
import NickName from './NickName';
import OttImg from './OttImg';
interface props {
  isWriter: boolean;
  isMine?: boolean;
}
const Post: React.FC<props> = ({ isWriter, isMine }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClickJoinHandler = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Container className="row-container" isWhite={isMine}>
        <Body className="col-container">
          {isMine ? (
            <OttImg ott="netflix" width="120px" />
          ) : (
            <NickName nickname={'닉네임'} />
          )}
          <Wrapper>
            <BlueLabel>모집 중</BlueLabel>
            <Count>
              2 <span>/ {4}</span>
            </Count>
          </Wrapper>
        </Body>
        <Side className="col-container">
          <DateBox dateString={'2021.01.02'} />
          <BtnGroup isWriter={isWriter} onClickHandler={onClickJoinHandler} />
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
  height: 100%;
`;
const Body = styled.div`
  gap: 30px;
`;
const Container = styled.div<{ isWhite?: boolean }>`
  background-color: #00000030;
  font-size: small;
  padding: 20px;
  ${(props) =>
    props.isWhite &&
    `
    background-color: #ffffff;
  color:#6D6D6D;
  `}
`;
export const Count = styled.span`
  font-size: medium;
  span {
    padding: 0;
    font-size: x-large;
    color: #45c7ff;
  }
`;
