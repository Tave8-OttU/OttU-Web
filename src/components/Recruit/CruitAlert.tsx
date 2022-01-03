import * as React from 'react';
import styled from 'styled-components';
import { GrayBorderBtn, RedBorderBtn } from '../common/Buttons';
import Modal from '../common/Modal';
import CruitCompleteAlert from './CruitCompleteAlert';
import JoinList from './JoinList';
import axios from 'axios';
import { recruitPost } from './Content';
import Count from '../common/Count';
import { useNavigate } from 'react-router';
interface props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  postObj: recruitPost;
}
interface waitList {
  waitlistIdx: number;
  user: {
    userIdx: number;
    nickname: string;
  };
  isAccepted: boolean;
}
const CruitAlert: React.FC<props> = ({ postObj, setIsOpen }) => {
  const [waitList, setWaitList] = React.useState([]);
  React.useEffect(() => {
    axios.get(`/recruit/waitlist/${postObj.recruitIdx}`).then((res) => {
      setWaitList(res.data.waitlist);
    });
  }, []);

  const [isCompletion, setIsCompletion] = React.useState(false);
  const navigate = useNavigate();
  const onDelClickHandler = () => {
    axios.delete(`/recurit/${postObj.recruitIdx}`).then((res) => {
      res.status === 200 && navigate('/main');
    });
  };
  return (
    <Modal setIsOpen={setIsOpen}>
      {isCompletion ? (
        <CruitCompleteAlert setIsOpen={setIsOpen} rid={postObj.recruitIdx} />
      ) : (
        <Container>
          <Head className="row-container">
            <h2>참여 요청</h2>
            <Count
              choiceNum={postObj.choiceNum}
              headcount={postObj.headcount}
            />
          </Head>
          <ListContainer className="col-container">
            {waitList.map((wait: waitList) => (
              <JoinList
                nickname={wait.user.nickname}
                isJoin={wait.isAccepted}
              />
            ))}
          </ListContainer>
          <BtnGroup className="row-container">
            <GrayBorderBtn onClick={() => setIsOpen(false)}>확인</GrayBorderBtn>
            <RedBorderBtn onClick={onDelClickHandler}>글 삭제</RedBorderBtn>
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
