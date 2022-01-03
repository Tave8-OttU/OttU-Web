import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import { BlueBtn } from '../common/Buttons';
import NickNameForm from '../Setting/NickNameForm';
interface props {
  nickname: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}
const EditNickName: React.FC<props> = ({ nickname, onChangeHandler }) => {
  const { userObj } = useSelector((state: RootState) => state.user.userObj);
  return (
    <From className="col-container">
      <span>기존 닉네임</span>
      <Prev>{/* userObj.nickname */ '닉네임'}</Prev>
      <NickNameForm nickname={nickname} onChangeHandler={onChangeHandler} />
      <Notice>
        - 영문 최대 16글자 혹은 한글 최대 8글자까지 가능
        <br />- 소문자, 숫자, 한글, _* 사용 가능
      </Notice>
      <BlueBtn>변경</BlueBtn>
    </From>
  );
};
export default EditNickName;
export const Prev = styled.div`
  color: #c2c2c2;
  border-bottom: solid thin #c2c2c2;
  padding: 10px;
  font-size: small;
  width: 200px;
`;
export const Notice = styled.div`
  font-size: small;
  color: #c2c2c2;
  font-weight: lighter;
  line-height: 2;
  margin: 30px 0;
  text-align: center;
`;
const From = styled.form`
  gap: 30px;
  width: 100%;
  & > button {
    text-align: center;
    box-shadow: 5px 5px 20px 0 #45c7ff35;
  }
`;
