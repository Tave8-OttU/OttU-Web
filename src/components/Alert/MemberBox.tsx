import * as React from 'react';
import styled from 'styled-components';
import NickName from '../common/NickName';
interface props {
  nickname: string;
}
const MemberBox: React.FC<props> = ({ nickname }) => {
  const [count, setCount] = React.useState(10);
  const onClickHandler = (type: string) => {
    if (type === 'plus') {
      count < 10 && setCount(count + 1);
    } else {
      count > 1 && setCount(count - 1);
    }
  };
  return (
    <Container className="row-container">
      <NickName nickname={nickname} />
      <Count className="row-container">
        <button onClick={() => onClickHandler('minus')}>-</button>
        <span>{count}</span>
        <button onClick={() => onClickHandler('plus')}>+</button>점
      </Count>
    </Container>
  );
};
export default MemberBox;
const Container = styled.div`
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 10px;
  justify-content: space-between;
  box-shadow: 5px 5px 10px 5px #00000010;
`;

const Count = styled.div`
  gap: 10px;
  span {
    color: #45c7ff;
    font-weight: bold;
  }
`;
