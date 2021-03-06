import * as React from 'react';
import styled from 'styled-components';
import { getConfirmMemHandler } from '../../../apis/api/recurit';
import { userType } from '../../common/NickName';
import MemberList from './MemberList';
interface props {
	rid: number;
}
const ListContainer: React.FC<props> = ({ rid }) => {
	const [memberList, setMemberList] = React.useState<userType[]>([]);
	React.useEffect(() => {
		getConfirmMemHandler(rid).then((res) => {
			setMemberList(res.members.map((it: { user: userType }) => it.user));
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
