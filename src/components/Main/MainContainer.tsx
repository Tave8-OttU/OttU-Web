import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { getUserOttHandler } from '../../apis/api/ott';
import { getMyOttListName } from '../../apis/services/ott';
import { Otts } from '../../assets/Objects/otts';
import { RootState } from '../../modules';
import OttImg from '../common/OttImg';
import Guide from './Guide';
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
			? navigate(`/myott/${ott}`)
			: navigate(`/recruit/${ott}?idx=${parseInt(id) + 1}`);
	};

	const [myOttList, setMyOttList] = React.useState<string[]>([]);
	React.useEffect(() => {
		getUserOttHandler(userObj.userIdx)
			.then(getMyOttListName)
			.then((res) => setMyOttList(res));
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
						<Guide isMyOtt={myOttList.includes(ott)} ott={ott} />
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
