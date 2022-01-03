import axios from 'axios';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { RootState } from '../../modules';
import OttImg from '../common/OttImg';
import Post from './Post/Post';
interface props {
  ott?: string;
}
export interface recruitPost {
  recruitIdx: number;
  platform: {
    platformIdx: number;
    platformName: string;
  };
  writer: {
    userIdx: number;
    nickname: string;
  };
  headcount: number;
  choiceNum: number;
  isCompleted: boolean;
  createdDate: string;
}
const Content: React.FC<props> = ({ ott }) => {
  const { userObj } = useSelector((state: RootState) => state.user);
  const [postArr, setPostArr] = React.useState([]);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const idx = params.get('idx');
  React.useEffect(() => {
    axios.get(`/recruit/list/${idx}`).then((res) => {
      setPostArr(res.data.recruitlist);
    });
  }, [idx]);
  return (
    <Container className="col-container">
      <Head>
        <OttImg ott={ott ? ott : ''} width="100px" />
      </Head>
      <PostWrapper className="col-container">
        {postArr.length === 0 ? (
          <Notice></Notice>
        ) : (
          postArr.map((post: recruitPost) => (
            <Post
              postObj={post}
              isWriter={post.writer.userIdx === userObj.userIdx}
            />
          ))
        )}
      </PostWrapper>
    </Container>
  );
};
export default Content;
const Head = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  height: 40px;
`;
const PostWrapper = styled.div`
  gap: 5px;
  overflow: scroll;
`;
const Container = styled.div`
  background-color: #1a1a1a;
  flex: 0.6;
  border-radius: 10px;
  padding: 20px;
  gap: 30px;
  box-shadow: 20px 20px 20px 10px #00000025;
`;
const Notice = styled.div``;
