import axios from 'axios';
import * as React from 'react';
import styled from 'styled-components';
import { recruitPost } from '../Content';
import JoinList from './JoinList';
interface props {
	postObj: recruitPost;
}
const ListContainer: React.FC<props> = ({ postObj }) => {
	const [waitList, setWaitList] = React.useState([]);
	React.useEffect(() => {
		axios.get(`/recruit/${postObj.recruitIdx}/waitlist`).then((res) => {
			setWaitList(res.data.waitlist);
		});
	}, []);
	return (
		<Container className="col-container">
			{waitList.map((wait: waitList) => (
				<JoinList nickname={wait.user.nickname} isJoin={wait.isAccepted} />
			))}
		</Container>
	);
};
export default ListContainer;
interface waitList {
	waitlistIdx: number;
	user: {
		userIdx: number;
		nickname: string;
	};
	isAccepted: boolean;
}
const Container = styled.div`
	height: 300px;
	width: 100%;
	overflow: scroll;
	gap: 10px;
`;
