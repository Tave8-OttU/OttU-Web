import * as React from 'react';
import styled from 'styled-components';
import { GrayBorderBtn, RedBorderBtn } from '../common/Buttons';
import Modal from '../common/Modal';
import CruitCompleteAlert from './CruitCompleteAlert';
import JoinList from './JoinList';
import { Count } from './Post';
interface props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const CruitAlert: React.FC<props> = ({ setIsOpen }) => {
  const [isCompletion, setIsCompletion] = React.useState(false);
  return (
    <Modal setIsOpen={setIsOpen}>
      {isCompletion ? (
        <CruitCompleteAlert setIsOpen={setIsOpen} />
      ) : (
        <Container>
          <Head className="row-container">
            <h2>참여 요청</h2>
            <Count>
              2 <span>/ {4}</span>
            </Count>
          </Head>
          <ListContainer className="col-container">
            <JoinList nickname="닉네임" isJoin={false} />
            <JoinList nickname="닉네임" isJoin={false} />
            <JoinList nickname="닉네임" isJoin={false} />
            <JoinList nickname="닉네임" isJoin={false} />
          </ListContainer>
          <BtnGroup className="row-container">
            <GrayBorderBtn>확인</GrayBorderBtn>
            <RedBorderBtn>글 삭제</RedBorderBtn>
          </BtnGroup>
        </Container>
      )}
    </Modal>
  );
};
export default CruitAlert;
const Head = styled.div`
  width: 100%;
  h2 {
    margin: 0;
    flex: 1;
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
  gap: 20px;
  transform: translate(-50%, -50%);
`;
const ListContainer = styled.div`
  height: 300px;
  width: 100%;
  overflow: scroll;
  gap: 10px;
`;
const Notice = styled.span<{ color?: string }>`
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
