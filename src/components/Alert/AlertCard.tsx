import * as React from 'react';
import styled from 'styled-components';
import DateBox from '../common/DateBox';
import EvaluationBox from './EvaluationBox';
interface props {
	content: string;
	date: string;
	teamIdx?: number;
	isEvaluated: boolean;
}
const AlertCard: React.FC<props> = ({
	content,
	date,
	teamIdx,
	isEvaluated,
}) => {
	const ott = content.split(`'`)[1];
	const [isOpen, setIsOpen] = React.useState(false);
	const onClickHandler = () => {
		teamIdx && isEvaluated
			? alert('이미 평가가 완료되었습니다.')
			: setIsOpen(true);
	};

	return (
		<>
			<Container className="col-container" onClick={onClickHandler}>
				<span>{content}</span>
				<DateBox dateString={date} />
			</Container>
			{isOpen && teamIdx && (
				<EvaluationBox setIsOpen={setIsOpen} teamIdx={teamIdx} ott={ott} />
			)}
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
