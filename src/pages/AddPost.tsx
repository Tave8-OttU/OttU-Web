import axios from 'axios';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Otts } from '../assets/Objects/otts';
import OttForm from '../components/Addott/OttForm';
import PriceBoxForm from '../components/Addott/PriceBoxFrom';
import ExplainBox from '../components/AddPost/ExplainBox';
import { BlueBtn } from '../components/common/Buttons';
import Head from '../components/common/Head';
import { RootState } from '../modules';
const AddPost: React.FC = () => {
  const navigate = useNavigate();
  const { userObj } = useSelector((state: RootState) => state.user.userObj);
  const [postObj, setPostObj] = React.useState({
    platformIdx: -1,
    headCount: 0,
  });
  const onClickHandler = (event: React.MouseEvent, type: string) => {
    const {
      currentTarget: { id },
    } = event;
    setPostObj((p) => ({ ...p, [type]: parseInt(id) }));
  };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    try {
      axios
        .post('/recruit/upload', {
          ...postObj,
          platformIdx: postObj.platformIdx + 1,
          userIdx: userObj.userIdx,
        })
        .then(
          (res) =>
            res.status === 201 &&
            navigate(`/recruit/${Otts[postObj.platformIdx]}`),
        );
    } catch (err) {}
  };
  return (
    <Container>
      <Head />
      <Body onSubmit={onSubmit}>
        <Wrapper className="col-container">
          <OttForm
            platform={postObj.platformIdx}
            onClickHandler={onClickHandler}
          />
        </Wrapper>
        <Wrapper className="col-container">
          <BlueBtn type="submit">작성</BlueBtn>
          <PriceBoxForm postObj={postObj} onClickHandler={onClickHandler} />
          <ExplainBox />
        </Wrapper>
      </Body>
    </Container>
  );
};
export default AddPost;
const Wrapper = styled.div`
  width: 100%;
  span {
    font-weight: bold;
  }
  button {
    width: 100px;
    text-align: center;
    align-self: flex-end;
    margin-bottom: 30px;
  }
`;
const Container = styled.div``;
const Body = styled.form`
  display: flex;
  flex-direction: row;
  padding: 50px;
  gap: 50px;
  background-color: #1a1a1a;
  margin: 50px;
  border-radius: 10px;
  box-shadow: 20px 20px 20px 10px #00000025;
`;
