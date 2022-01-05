import axios from 'axios';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import arrow from '../../assets/images/arrow.png';
import { Otts } from '../../assets/Objects/otts';
import { RootState } from '../../modules';
import { ott } from '../../pages/MyOtt';
import OttImg from '../common/OttImg';
const MainContainer: React.FC = () => {
	const { userObj } = useSelector((state: RootState) => state.user);
	const navigate = useNavigate();
	const onClickHandler = (
		event: React.MouseEvent,
		myott: boolean,
		ott: string
	) => {
		const {
			currentTarget: { id },
		} = event;
		myott
			? navigate(`/myott/${id}`)
			: navigate(`/recruit/${ott}?idx=${parseInt(id) + 1}`);
	};

	const [myOttList, setMyOttList] = React.useState<string[]>([]);
	React.useEffect(() => {
		axios.get(`/user/${userObj.userIdx}/ott`).then((res) => {
			setMyOttList(
				res.data.ottlist.map((ott: ott) => ott.platform.platformName)
			);
		});
	}, []);

	return (
		<Container>
			{Otts.map((ott, idx) => (
				<>
					<OttContainer
						onClick={(e) => onClickHandler(e, myOttList.includes(ott), ott)}
						id={idx + ''}
						isNone={!myOttList.includes(ott)}
					>
						<Guide id="target">
							<OttImg ott={ott} height="20px" isWhite />
							<Wrapper className="row-container">
								{!myOttList.includes(ott) ? '팀원 모집' : '나의 OTT'} 바로가기
								<img src={arrow} width="15px" />
							</Wrapper>
						</Guide>
						<OttImg ott={ott} width="200px" />
					</OttContainer>
				</>
			))}
		</Container>
	);
};
export default MainContainer;

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 350px);
	gap: 50px;
`;
const Guide = styled.div`
	width: 400px;
	padding: 20px;
	box-sizing: border-box;
	border-radius: 10px 10px 0 0;
	background-color: #000000;
	position: absolute;
	transform: translate(0, -8vw);
	display: none;
	align-items: center;
`;
const Wrapper = styled.div`
	flex: 1;
	gap: 5px;
	justify-content: flex-end;
	font-weight: lighter;
	font-size: small;
`;
const OttContainer = styled.div<{ isNone?: boolean }>`
	background-color: white;
	width: 350px;
	height: 185px;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 20px 20px 20px 10px #00000025;
	cursor: pointer;
	${(props) =>
		props.isNone &&
		`
  opacity:50%;`}
	transition: 0.3s;
	&:hover {
		#target {
			display: flex;
		}
		width: 400px;
		height: 200px;
		opacity: 100%;
	}
`;
