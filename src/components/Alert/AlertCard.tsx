import * as React from 'react';
import styled from 'styled-components';
import DateBox from '../common/DateBox';
import EvaluationBox from './EvaluationBox';
interface props {
  content: string;
  date: string;
  isEvalue?: boolean;
}
const AlertCard: React.FC<props> = ({ content, date, isEvalue }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClickHandler = () => {
    isEvalue && setIsOpen(true);
  };
  return (
    <>
      <Container className="col-container" onClick={onClickHandler}>
        <span>{content}</span>
        <DateBox dateString={date} />
      </Container>
      {isOpen && <EvaluationBox setIsOpen={setIsOpen} />}
    </>
  );
};
export default AlertCard;
const Container = styled.div`
  background-color: #343434;
  padding: 10px;
  gap: 20px;
  background-color: #00000075;
  font-size: small;
`;
