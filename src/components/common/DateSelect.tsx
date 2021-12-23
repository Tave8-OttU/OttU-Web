import * as React from 'react';
import styled from 'styled-components';
const DateSelect: React.FC = () => {
  return (
    <Wrapper className="row-container">
      매월
      <Select>
        <option value="defalut" selected hidden>
          일자
        </option>
        {Array(31)
          .fill(0)
          .map((it, idx) => (
            <option value={idx + 1}>{idx + 1}</option>
          ))}
      </Select>
      일
    </Wrapper>
  );
};
export default DateSelect;
const Select = styled.select`
  appearance: none;
  padding: 10px;
  padding-right: 40px;
  border: solid thin #45c7ff;
  border-radius: 5px;
  color: #bcbcbc;
  background-color: transparent;
  cursor: pointer;
  font-size: small;
`;
const Wrapper = styled.div`
  gap: 10px;
`;
