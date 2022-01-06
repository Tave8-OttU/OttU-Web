import axios from 'axios';
import * as React from 'react';
import styled from 'styled-components';
import { userType } from '../../common/NickName';
import MemberList from './MemberList';
interface props {
	rid: number;
}
const ListContainer: React.FC<props> = ({ rid }) => {
	const [memberList, setMemberList] = React.useState<userType[]>([]);
	React.useEffect(() => {
		axios.get(`/recruit/${rid}/members`).then((res) => {
			setMemberList(res.data.members);
		});
	}, []);

	return (
		<Container className="col-container">
			{memberList.map((mem) => (
				<MemberList userObj={mem} />
			))}
		</Container>
	);
};
export default ListContainer;
const Container = styled.div`
	gap: 10px;
	width: 100%;
`;
