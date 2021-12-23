import * as React from 'react';
import styled from 'styled-components';
import { infoFormprops } from './NickNameForm';

const KakaoIdForm: React.FC<infoFormprops> = ({ infoObj, onChangeHandler }) => {
  return (
    <Container className="col-container">
      <span>카카오톡 아이디</span>
      <input
        type="text"
        placeholder="카카오톡 아이디"
        name="kakaotalk_id"
        value={infoObj.kakaotalk_id}
        onChange={onChangeHandler}
      />
    </Container>
  );
};
export default KakaoIdForm;

const Container = styled.div`
  gap: 20px;
`;
