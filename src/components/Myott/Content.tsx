import * as React from 'react';
import styled from 'styled-components';
import { BlueLabel } from '../common/Labels';
import PriceInfo from '../common/PriceInfo';
import TeamInfo from '../common/TeamInfo';

const Content: React.FC = () => {
  return (
    <Container className="col-container">
      <Head>
        <span>결제 일자</span>
        <DelBtn>해지</DelBtn>
      </Head>
      <DateInfo>
        매달 <Blue>{}일</Blue>
      </DateInfo>
      <span>요금제</span>
      <BoxWrapper className="row-container">
        <PriceInfo type={'프리미엄'} price={'14,900'} />
        <TeamInfo people="4" price={'14,900'} />
      </BoxWrapper>
    </Container>
  );
};
export default Content;
const Head = styled.div`
  display: flex;
  flex-direction: row;
  span {
    flex: 1;
  }
`;
const DelBtn = styled.button`
  color: #ee6a61;
  border: solid thin #ee6a61;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: small;
`;
const DateInfo = styled.span`
  font-size: large;
  margin-bottom: 20px;
`;
const Blue = styled.span`
  color: #45c7ff;
  font-weight: bold;
`;
const BoxWrapper = styled.div`
  gap: 20px;
`;
const Container = styled.div`
  position: sticky;
  top: 20px;
  background-color: #1a1a1a;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 50px;
  gap: 30px;
  box-shadow: 20px 20px 20px 10px #00000025;
`;
