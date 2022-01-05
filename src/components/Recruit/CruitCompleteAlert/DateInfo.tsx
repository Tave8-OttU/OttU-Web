import * as React from 'react';
import styled from 'styled-components';
import DateSelect from '../../common/DateSelect';
interface props {
	setDate: React.Dispatch<React.SetStateAction<number>>;
}
const DateInfo: React.FC<props> = ({ setDate }) => {
	return (
		<Container className="col-container">
			<h3>
				결제일 입력 <span>*결제 알림일</span>
			</h3>
			<Notice>
				* 팀원들과 소통후, 7일 이내로 결제일을 입력하셔야 팀이 확정됩니다.
			</Notice>
			<DateSelect setDate={setDate} />
		</Container>
	);
};
export default DateInfo;
const Notice = styled.span`
	font-size: x-small;
	color: #ffa49e;
`;
const Container = styled.div`
	width: 100%;
	gap: 15px;
	h3 {
		margin: 0;
		color: #45c7ff;
		span {
			font-size: x-small;
			font-weight: lighter;
			color: black;
		}
	}
`;
