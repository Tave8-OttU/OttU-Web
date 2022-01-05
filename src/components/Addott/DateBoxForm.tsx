import * as React from 'react';
import styled from 'styled-components';
import DateSelect from '../common/DateSelect';
interface props {
	setDate: React.Dispatch<React.SetStateAction<number>>;
}
const DateBoxForm: React.FC<props> = ({ setDate }) => {
	return (
		<Container>
			<span>결제 일자</span>
			<DateSelect setDate={setDate} />
		</Container>
	);
};
export default DateBoxForm;
const Container = styled.div`
	& > div {
		margin-top: 30px;
	}
`;
