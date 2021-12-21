import * as React from 'react';
import styled from 'styled-components';
import GenreBox from './GenreBox';
import LevelBox from './LevelBox';
import Modal from './Modal';
interface props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ProfileModal: React.FC<props> = ({ setIsOpen }) => {
  return (
    <Modal setIsOpen={setIsOpen}>
      <Container className="col-container">
        <Head className="row-container">
          <h2>닉네임</h2>
        </Head>
        <LevelBox />
        <GenreBox />
      </Container>
    </Modal>
  );
};
export default ProfileModal;
const Head = styled.div`
  width: 100%;
  h2 {
    margin: 0;
    flex: 1;
  }
`;
const Container = styled.div`
  background-color: white;
  position: absolute;
  color: black;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  gap: 20px;
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
