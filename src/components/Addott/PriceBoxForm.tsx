import * as React from 'react';
import styled from 'styled-components';
import { Prices } from '../../assets/Objects/otts';
interface props {
	postObj: {
		platformIdx: number;
		headcount: number;
	};
	onClickHandler: (event: React.MouseEvent, type: string) => void;
}

const PriceBoxForm: React.FC<props> = ({ postObj, onClickHandler }) => {
	return (
		<Container>
			<span>요금제 선택</span>
			<Wrapper className="row-container">
				{postObj.platformIdx != -1 &&
					Prices[postObj.platformIdx].map((p) => (
						<Box
							id={p.headCount + ''}
							onClick={(e) => onClickHandler(e, 'headcount')}
							isClicked={p.headCount === postObj.headcount}
						>
							<span>{p.title}</span>
							<small>{p.headCount}명</small>
							<span>{p.price.toLocaleString('ko-kr')}원</span>
						</Box>
					))}
			</Wrapper>
		</Container>
	);
};
export default React.memo(PriceBoxForm);
const Container = styled.div`
	background-color: #00000030;
	padding: 20px;
	border-radius: 10px;
	margin-bottom: 50px;
`;
const Wrapper = styled.div`
	gap: 20px;
	justify-content: center;
`;
const Box = styled.div<{ isClicked: boolean }>`
	background-color: #00000030;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100px;
	width: 150px;
	padding: 20px;
	border-radius: 10px;
	margin-top: 20px;
	cursor: pointer;
	${(props) =>
		props.isClicked &&
		`
  background-color: #ffffff30;

  `};
	&:hover {
		background-color: #ffffff30;
	}
`;
