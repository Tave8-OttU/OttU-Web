import * as React from 'react';
import styled from 'styled-components';
import { recruitPost } from '../Content';
import CruitAlert from '../CruitAlert';
import JoinAlert from '../JoinAlert';
import Head from './Head';
import RecruitInfo from './RecruitInfo';
import Side from './Side';

interface props {
  postObj: recruitPost;
  isWriter: boolean;
  isMine?: boolean;
}
const Post: React.FC<props> = ({ postObj, isWriter, isMine }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Container className="row-container" isWhite={isMine}>
        <Body className="col-container">
          <Head postObj={postObj} isMine={isMine} />
          <RecruitInfo postObj={postObj} />
        </Body>
        <Side postObj={postObj} isWriter={isWriter} setIsOpen={setIsOpen} />
      </Container>
      {isOpen &&
        (isWriter ? (
          <CruitAlert postObj={postObj} setIsOpen={setIsOpen} />
        ) : (
          <JoinAlert postObj={postObj} setIsOpen={setIsOpen} />
        ))}
    </>
  );
};
export default Post;
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
