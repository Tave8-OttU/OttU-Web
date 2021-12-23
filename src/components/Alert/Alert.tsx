import * as React from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';
import AlertCard from './AlertCard';
interface props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Alert: React.FC<props> = ({ setIsOpen }) => {
  return (
    <Modal setIsOpen={setIsOpen}>
      <AlertContainer className="col-container">
        <AlertCard content={'내용'} date={'2021.02.01'} />
        <AlertCard
          content={
            "팀원의 해지로 ‘티빙' OttU팀이 해체되었습니다.팀원 평가를 진행해주세요."
          }
          date={'2021.02.01'}
          isEvalue
        />
        <AlertCard content={'내용'} date={'2021.02.01'} />
        <AlertCard content={'내용'} date={'2021.02.01'} />
        <AlertCard content={'내용'} date={'2021.02.01'} />
        <AlertCard content={'내용'} date={'2021.02.01'} />
        <AlertCard content={'내용'} date={'2021.02.01'} />
      </AlertContainer>
    </Modal>
  );
};
export default Alert;
const AlertContainer = styled.div`
  width: 300px;
  max-height: 500px;
  background-color: #343434;
  padding: 10px;
  border-radius: 10px;
  gap: 5px;
  overflow: scroll;
  position: absolute;
  right: 0;
`;
