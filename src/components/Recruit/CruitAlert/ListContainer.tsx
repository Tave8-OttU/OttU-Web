import axios from 'axios';
import * as React from 'react';
import styled from 'styled-components';
import { userType } from '../../common/NickName';
import { recruitPost } from '../Content';
import JoinList from './JoinList';
interface props {
	rid: number;
}
const ListContainer: React.FC<props> = ({ rid }) => {
	const [waitList, setWaitList] = React.useState([]);
	React.useEffect(() => {
		axios.get(`/recruit/${rid}/waitlist`).then((res) => {
			setWaitList(res.data.waitlist);
		});
	}, []);

	return (
		<Container className="col-container">
			{waitList.map((wait: waitList) => (
				<JoinList
					waitIdx={wait.waitlistIdx}
					userIdx={wait.user.userIdx}
					isJoin={wait.isAccepted}
				/>
			))}
		</Container>
	);
};
export default ListContainer;
export interface waitList {
	waitlistIdx: number;
	user: userType;
	isAccepted: boolean;
}
const Container = styled.div`
	height: 300px;
	width: 100%;
	overflow: scroll;
	gap: 10px;
`;
