import * as React from 'react';
import styled from 'styled-components';
interface props {
  gage: number;
}
const Gage: React.FC<props> = ({ gage }) => {
  return (
    <OuterGage gage={gage} className="col-container">
      <div></div>
    </OuterGage>
  );
};
export default Gage;
const OuterGage = styled.div<{ gage: number }>`
  background-color: #ffffff25;
  width: 100%;
  height: 10px;
  div {
    width: ${(props) => props.gage}%;
    height: 10px;
    background-color: #bbebff;
  }
`;
