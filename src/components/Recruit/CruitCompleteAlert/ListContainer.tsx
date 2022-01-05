import axios from 'axios';
import * as React from 'react';
import styled from 'styled-components';
import MemberList from './MemberList';
interface props {
	rid: number;
}
const ListContainer: React.FC<props> = ({ rid }) => {
	const [memberList, setMemberList] = React.useState<memeber[]>([]);
	React.useEffect(() => {
		axios.get(`/recruit/${rid}/members`).then((res) => {
			setMemberList(res.data.members);
		});
	}, []);

	return (
		<Container className="col-container">
			{memberList.map((mem) => (
				<MemberList nickname={mem.nickname} kakao_id={mem.kakaotalkId} />
			))}
		</Container>
	);
};
export default ListContainer;
interface memeber {
	userIdx: number;
	kakaotalkId: string;
	nickname: string;
}
const Container = styled.div`
	gap: 10px;
	width: 100%;
`;
