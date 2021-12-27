import * as React from 'react';
import styled from 'styled-components';
interface props {
  kakaotalk_id: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}
const KakaoIdForm: React.FC<props> = ({ kakaotalk_id, onChangeHandler }) => {
  return (
    <Container className="col-container">
      <span>카카오톡 아이디</span>
      <input
        type="text"
        placeholder="카카오톡 아이디"
        name="kakaotalk_id"
        value={kakaotalk_id}
        onChange={onChangeHandler}
      />
    </Container>
  );
};
export default KakaoIdForm;

const Container = styled.div`
  gap: 20px;
  input[type='text'] {
    border-bottom: solid thin #45c7ff;
    padding: 10px;
    font-size: small;
    width: 200px;
  }
`;
