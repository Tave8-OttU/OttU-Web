import * as React from 'react';
import styled from 'styled-components';
import { Otts } from '../../assets/Objects/otts';
interface props {
  ott?: string;
}
const OttContainer: React.FC<props> = ({ ott }) => {
  return (
    <Wrapper>
      {Otts.map(
        (it) =>
          ott != it && (
            <OttBox id={it}>
              <img
                src={require('../../assets/images/' + it + '.png').default}
                width="100px"
              />
            </OttBox>
          ),
      )}
    </Wrapper>
  );
};
export default OttContainer;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 0.5;
`;
const OttBox = styled.div`
  background-color: white;
  border-radius: 10px;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 20px 20px 20px 10px #00000025;
  cursor: pointer;
  img {
    margin-left: 20px;
  }
`;
