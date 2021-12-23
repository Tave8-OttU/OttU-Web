import * as React from 'react';
import styled from 'styled-components';
import DateSelect from '../common/DateSelect';
const DateBoxForm: React.FC = () => {
  return (
    <Container>
      <span>결제 일자</span>
      <DateSelect />
    </Container>
  );
};
export default DateBoxForm;
const Container = styled.div``;
