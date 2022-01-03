import * as React from 'react';
import { BlueBorderBtn, GrayBorderBtn } from '../common/Buttons';
interface props {
  isWriter: boolean;
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}
const BtnGroup: React.FC<props> = ({ isWriter, onClickHandler }) => {
  return (
    <>
      {isWriter ? (
        <GrayBorderBtn onClick={onClickHandler}>참여 정보</GrayBorderBtn>
      ) : (
        <BlueBorderBtn onClick={onClickHandler}>참여 하기</BlueBorderBtn>
      )}
    </>
  );
};
export default BtnGroup;
