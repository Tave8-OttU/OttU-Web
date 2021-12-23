import * as React from 'react';
import styled from 'styled-components';
import { BlueBtn } from '../common/Buttons';
import Modal from '../common/Modal';
import MemberBox from './MemberBox';
interface props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const EvaluationBox: React.FC<props> = ({ setIsOpen }) => {
  return (
    <Modal setIsOpen={setIsOpen}>
      <Container className="col-container">
        <img
          src={require('../../assets/images/' + 'tving' + '.png').default}
          width="100px"
        />
        <h4>팀원 신뢰도 평가</h4>
        <Notice>
          오뜨 level에 반영되는 평가로 추후 사용자의 신뢰도를 나타내줍니다.
        </Notice>
        <Wrapper className="col-container">
          <MemberBox nickname="닉네임" />
          <MemberBox nickname="닉네임" />
          <MemberBox nickname="닉네임" />
        </Wrapper>
        <Wrapper className="row-container">
          <BlueBtn style={{ color: 'white' }}>확인</BlueBtn>
        </Wrapper>
      </Container>
    </Modal>
  );
};
export default EvaluationBox;
const Container = styled.div`
  background-color: white;
  position: fixed;
  color: black;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  gap: 20px;
  transform: translate(-50%, -50%);
  h4 {
    margin: 0;
    margin-top: 10px;
  }
  img {
    padding: 10px 0;
  }
  z-index: 1;
`;
const Wrapper = styled.div`
  gap: 10px;
  justify-content: center;
`;
const Notice = styled.span`
  font-size: small;
  font-weight: lighter;
  color: #c4c4c4;
`;
