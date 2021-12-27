import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import { BlueBtn } from '../common/Buttons';
import KakaoIdForm from '../Setting/KakaoIdForm';
import { Notice, Prev } from './EditNickName';
interface props {
  kakaotalk_id: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}
const EditKakaoId: React.FC<props> = ({ kakaotalk_id, onChangeHandler }) => {
  const { userObj } = useSelector((state: RootState) => state.user.userObj);
  return (
    <From className="col-container">
      <span>기존 카카오톡 아이디</span>
      <Prev>{/* userObj.kakaotalk_id */ '아이디'}</Prev>
      <KakaoIdForm
        kakaotalk_id={kakaotalk_id}
        onChangeHandler={onChangeHandler}
      />
      <Notice>
        - 해당 카톡 아이디는 모집에서 사용됩니다.
        <br />- 모집 완료 시 모집자가 팀원들의 카톡 아이디를 받게 됩니다.
      </Notice>
      <BlueBtn>변경</BlueBtn>
    </From>
  );
};
export default EditKakaoId;
const From = styled.form`
  gap: 30px;
  width: 100%;
  & > button {
    text-align: center;
    box-shadow: 5px 5px 20px 0 #45c7ff35;
  }
`;
