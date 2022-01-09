import * as React from 'react';
import styled from 'styled-components';
import { Otts } from '../../assets/Objects/otts';
import OttImg from '../common/OttImg';
interface props {
	platform: number;
	onClickHandler: (event: React.MouseEvent, type: string) => void;
}
const OttForm: React.FC<props> = ({ platform, onClickHandler }) => {
	return (
		<Container>
			<span>OTT 선택</span>
			<OttWrapper>
				{Otts.map((ott, idx) => (
					<OttContainer
						onClick={(e) => onClickHandler(e, 'platformIdx')}
						id={idx + ''}
						isClicked={idx === platform}
					>
						<OttImg ott={ott} width="50%" />
					</OttContainer>
				))}
			</OttWrapper>
		</Container>
	);
};
export default OttForm;
const OttWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 250px);
	gap: 50px;
	margin-top: 50px;
`;
const Container = styled.div``;
const OttContainer = styled.div<{ isClicked: boolean }>`
	background-color: white;
	width: 250px;
	height: 135px;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 20px 20px 20px 10px #00000025;
	cursor: pointer;
	${(props) =>
		props.isClicked &&
		`
    border:solid 3px #45C7FF;
  `}
	&:hover {
		border: solid 3px #45c7ff;
	}
`;
