import * as React from 'react';
import styled from 'styled-components';
import ProfileModal from './ProfileModal';
interface props {
  nickname: string;
}
const NickName: React.FC<props> = ({ nickname }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const oClickJoinHandler = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Container onClick={oClickJoinHandler}>{nickname}</Container>
      {isOpen && <ProfileModal setIsOpen={setIsOpen} />}
    </>
  );
};
export default NickName;
const Container = styled.button`
  font-size: medium;
  font-weight: bold;
`;
