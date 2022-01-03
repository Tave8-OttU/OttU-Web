import axios from 'axios';
import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Prices } from '../../assets/Objects/otts';
import { RootState } from '../../modules';
import { GrayBorderBtn, RedBorderBtn } from '../common/Buttons';
import Modal from '../common/Modal';
import PriceInfo from '../common/PriceInfo';
import TeamInfo from '../common/TeamInfo';
import { recruitPost } from './Content';
interface props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  postObj: recruitPost;
}
const JoinAlert: React.FC<props> = ({ setIsOpen, postObj }) => {
  const { userObj } = useSelector((state: RootState) => state.user.userObj);
  const onClickHandler = () => {
    axios.post(`/recruit/participate`, {
      recruitIdx: postObj.recruitIdx,
      userIdx: userObj.userIdx,
    });
  };
  const headcount = postObj.headcount;
  const platform = postObj.platform.platformIdx - 1;
  const ott = Prices[platform].find((p) => p.headCount === headcount);
  return (
    <Modal setIsOpen={setIsOpen}>
      <Container>
        <h2>참여 요청하시겠습까?</h2>
        <PriceInfo type={ott ? ott.title : ''} price={ott ? ott.price : 0} />
        <TeamInfo people={headcount} price={ott ? ott.price : 0} />
        <Notice color="#FFA49E">
          * 요청시 작성자에게 카카오 아이디가 공개되며 이를 통해 팀원간 연락이
          가능합니다.
        </Notice>
        <Notice color="#C4C4C4">
          작성자가 요청 수락시, 팀원으로 모집됩니다.
        </Notice>
        <BtnGroup className="row-container">
          <GrayBorderBtn onClick={onClickHandler}>확인</GrayBorderBtn>
          <RedBorderBtn onClick={() => setIsOpen(false)}>취소</RedBorderBtn>
        </BtnGroup>
      </Container>
    </Modal>
  );
};
export default JoinAlert;
const Container = styled.div`
  background-color: white;
  position: fixed;
  color: black;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  gap: 20px;
  transform: translate(-50%, -50%);
`;
export const Notice = styled.span<{ color?: string }>`
  font-size: small;
  text-align: center;
  color: ${(props) => props.color};
`;
const BtnGroup = styled.div`
  gap: 20px;
  button {
    padding: 10px 25px;
    font-size: small;
    border-radius: 5px;
  }
`;
