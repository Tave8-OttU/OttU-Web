import * as React from 'react';
import styled from 'styled-components';
import { BlueBtn } from '../common/Buttons';
import DateSelect from '../common/DateSelect';
import Modal from '../common/Modal';
import MemberList from './MemberList';
interface props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const CruitCompleteAlert: React.FC<props> = ({ setIsOpen }) => {
  return (
    <Modal setIsOpen={setIsOpen}>
      <Container>
        <Head className="row-container">
          <h2>팀원 정보</h2>
        </Head>
        <ListContainer className="col-container">
          <MemberList nickname="닉네임" kakao_id={'runru'} />
          <MemberList nickname="닉네임" kakao_id={'runru'} />
          <MemberList nickname="닉네임" kakao_id={'runru'} />
        </ListContainer>
        <DateInfo className="col-container">
          <h3>
            결제일 입력 <span>*결제 알림일</span>
          </h3>
          <Notice>
            * 팀원들과 소통후, 7일 이내로 결제일을 입력하셔야 팀이 확정됩니다.
          </Notice>
          <DateSelect />
        </DateInfo>
        <BlueBtn style={{ color: 'white' }}>완료</BlueBtn>
      </Container>
    </Modal>
  );
};
export default CruitCompleteAlert;
const Head = styled.div`
  width: 100%;
  h2 {
    margin: 0;
    flex: 1;
    color: #45c7ff;
  }
`;
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
  gap: 25px;
  transform: translate(-50%, -50%);
`;
const ListContainer = styled.div`
  gap: 10px;
  width: 100%;
`;
const Notice = styled.span`
  font-size: x-small;
  color: #ffa49e;
`;
const DateInfo = styled.div`
  width: 100%;
  gap: 15px;
  h3 {
    margin: 0;
    color: #45c7ff;
    span {
      font-size: x-small;
      font-weight: lighter;
      color: black;
    }
  }
`;
