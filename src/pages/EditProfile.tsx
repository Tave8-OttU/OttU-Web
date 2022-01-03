import * as React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Head from '../components/common/Head';
import EditKakaoId from '../components/EditProfile/EditKakaoId';
import EditNickName from '../components/EditProfile/EditNickName';
import CheckBoxForm from '../components/Setting/CheckBoxForm';
const EditProfile: React.FC = () => {
  const { type } = useParams();
  const [infoObj, setInfoObj] = React.useState('');
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setInfoObj(value);
  };
  const [interestArr, setInterestArr] = React.useState<string[]>([]);
  return (
    <Container>
      <Head />
      <Body className="col-container">
        <Label>
          {type === 'nickname'
            ? '닉네임 변경'
            : type === 'genre'
            ? '관심장르 변경'
            : '카카오톡 아이디 변경'}
        </Label>
        {type === 'nickname' && (
          <EditNickName nickname={infoObj} onChangeHandler={onChangeHandler} />
        )}
        {type === 'genre' && (
          <CheckBoxForm
            interestArr={interestArr}
            setInterestArr={setInterestArr}
          />
        )}
        {type === 'kakaoId' && (
          <EditKakaoId
            kakaotalk_id={infoObj}
            onChangeHandler={onChangeHandler}
          />
        )}
      </Body>
    </Container>
  );
};
export default EditProfile;
const Label = styled.h3`
  margin-top: 0;
`;
const Container = styled.div``;
const Body = styled.div`
  display: flex;
  padding: 50px;
  gap: 50px;
  background-color: #1a1a1a;
  margin: 30px 35%;
  border-radius: 10px;
  box-shadow: 20px 20px 20px 10px #00000025;
`;
