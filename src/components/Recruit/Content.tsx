import * as React from 'react';
import styled from 'styled-components';
import Post from './Post';
interface props {
  ott?: string;
}
const Content: React.FC<props> = ({ ott }) => {
  return (
    <Container className="col-container">
      <Head>
        <img
          src={require('../../assets/images/' + ott + '.png').default}
          width="100px"
        />
      </Head>
      <PostWrapper className="col-container">
        <Post isWriter={false} />
        <Post isWriter={true} />
      </PostWrapper>
    </Container>
  );
};
export default Content;
const Head = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;
const PostWrapper = styled.div`
  gap: 5px;
`;
const Container = styled.div`
  position: sticky;
  top: 20px;
  background-color: #1a1a1a;
  flex: 0.6;
  border-radius: 10px;
  padding: 20px;
  gap: 30px;
  box-shadow: 20px 20px 20px 10px #00000025;
`;
