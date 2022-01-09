import * as React from 'react';
import styled from 'styled-components';
import NickName, { userType } from '../../common/NickName';
interface props {
	userObj: userType;
}
const MemberList: React.FC<props> = ({ userObj }) => {
	return (
		<Container className="row-container">
			<NickName userIdx={userObj.userIdx} />
			<IdBox className="row-container">
				<span>카카오 아이디</span>
				{userObj.kakaotalkId}
			</IdBox>
		</Container>
	);
};
export default MemberList;
const Container = styled.div`
	gap: 10px;
`;
const IdBox = styled.div`
	font-size: small;
	padding: 10px;
	border: solid thin #e2e2e2;
	border-radius: 5px;
	font-weight: lighter;
	span {
		font-weight: bold;
		margin-right: 20px;
	}
`;
