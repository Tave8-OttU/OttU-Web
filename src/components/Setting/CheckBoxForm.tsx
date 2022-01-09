import * as React from 'react';
import styled from 'styled-components';
interface props {
	interestArr: number[];
	setInterestArr: React.Dispatch<React.SetStateAction<number[]>>;
}
const CheckBoxForm: React.FC<props> = ({ interestArr, setInterestArr }) => {
	const Interests = [
		'드라마',
		'멜로/로맨스',
		'범죄',
		'스릴러',
		'사극',
		'성인/애로',
		'애니메이션',
		'액션',
		'코미디',
		'판타지',
		'SF',
		'기타',
	];
	const onClickHandler = (event: React.MouseEvent) => {
		const {
			currentTarget: { id },
		} = event;
		if (!interestArr.includes(parseInt(id))) {
			interestArr.length < 3 && setInterestArr((p) => [...p, parseInt(id)]);
		} else {
			setInterestArr(interestArr.filter((it) => it != parseInt(id)));
		}
	};
	return (
		<>
			<Label>
				컨텐츠 관심 장르<span>*최대 3개</span>
			</Label>
			<CheckBoxContainer>
				{Interests.map((interest, idx) => (
					<GrayBtn
						type="button"
						onClick={onClickHandler}
						isChecked={interestArr.includes(idx + 1)}
						id={idx + 1 + ''}
					>
						{interest}
					</GrayBtn>
				))}
			</CheckBoxContainer>
		</>
	);
};
export default CheckBoxForm;
const Label = styled.span`
	span {
		font-size: x-small;
	}
`;
const CheckBoxContainer = styled.div`
	width: 350px;
`;
const GrayBtn = styled.button<{ isChecked?: boolean }>`
	margin-right: 20px;
	margin-bottom: 20px;
	font-size: small;
	display: inline-block;
	background-color: #535353;
	border-radius: 50px;
	padding: 10px 20px;
	${(props) =>
		props.isChecked &&
		`
    border:solid thin #45c7ff;
  `}
`;
