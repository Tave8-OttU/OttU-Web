import * as React from 'react';
import styled from 'styled-components';
interface props {
  dateString: string;
}
const DateBox: React.FC<props> = ({ dateString }) => {
  const date = new Date(dateString);
  return (
    <Wrapper>
      {date.getFullYear() +
        '.' +
        ('0' + (date.getMonth() + 1)).slice(-2) +
        '.' +
        ('0' + date.getDate()).slice(-2)}
    </Wrapper>
  );
};
export default DateBox;
const Wrapper = styled.div`
  color: #ffffff50;
`;
