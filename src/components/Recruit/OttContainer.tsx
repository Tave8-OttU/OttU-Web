import * as React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Otts } from '../../assets/Objects/otts';
import OttImg from '../common/OttImg';
interface props {
	ott?: string;
}
const OttContainer: React.FC<props> = ({ ott }) => {
	const navigate = useNavigate();
	const onClickHandler = (event: React.MouseEvent, ott: string) => {
		const {
			currentTarget: { id },
		} = event;
		navigate(`/recruit/${ott}?idx=${parseInt(id) + 1}`);
	};

	return (
		<Wrapper>
			{Otts.map(
				(it, idx) =>
					ott != it && (
						<OttBox id={idx + ''} onClick={(e) => onClickHandler(e, it)}>
							<OttImg ott={it} width="100px" />
						</OttBox>
					)
			)}
		</Wrapper>
	);
};
export default OttContainer;
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	flex: 0.5;
`;
const OttBox = styled.div`
	background-color: white;
	border-radius: 10px;
	height: 80px;
	width: 100%;
	display: flex;
	align-items: center;
	box-shadow: 20px 20px 20px 10px #00000025;
	cursor: pointer;
	img {
		margin-left: 20px;
	}
`;
