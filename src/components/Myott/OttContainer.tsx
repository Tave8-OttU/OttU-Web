import * as React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Otts } from '../../assets/Objects/otts';
interface props {
  ott?: string;
}
const OttContainer: React.FC<props> = ({ ott }) => {
  const navigate = useNavigate();
  const onClickHandler = (event: React.MouseEvent) => {
    const {
      currentTarget: { id },
    } = event;
    navigate(`/myott/${id}`);
  };
  return (
    <Wrapper>
      <OttBox id={ott}>
        <img
          src={require('../../assets/images/' + ott + '.png').default}
          width="200px"
        />
      </OttBox>
      {Otts.map(
        (it) =>
          ott != it && (
            <OttBox id={it} isSmall onClick={onClickHandler}>
              <img
                src={require('../../assets/images/' + it + '.png').default}
                width="150px"
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
`;
const OttBox = styled.div<{ isSmall?: boolean }>`
  background-color: white;
  width: 350px;
  height: 185px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 20px 20px 20px 10px #00000025;
  cursor: pointer;
  ${(props) =>
    props.isSmall &&
    `
  width: 250px;
  height: 135px;
  opacity:50%;
  `}
`;
