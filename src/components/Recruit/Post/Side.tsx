import * as React from 'react';
import styled from 'styled-components';
import DateBox from '../../common/DateBox';
import BtnGroup from '../BtnGroup';
import { recruitPost } from '../Content';

interface props {
  postObj: recruitPost;
  isWriter: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Side: React.FC<props> = ({ postObj, isWriter, setIsOpen }) => {
  const onClickJoinHandler = () => {
    setIsOpen(true);
  };
  return (
    <Container className="col-container">
      <DateBox dateString={postObj.createdDate} />
      {!postObj.isCompleted && (
        <BtnGroup isWriter={isWriter} onClickHandler={onClickJoinHandler} />
      )}
    </Container>
  );
};
export default Side;
const Container = styled.div`
  flex: 1;
  gap: 30px;
  align-items: flex-end;
  height: 100%;
`;
