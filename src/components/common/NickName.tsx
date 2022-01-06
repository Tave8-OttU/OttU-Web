import axios from 'axios';
import * as React from 'react';
import styled from 'styled-components';
import { genreType } from './GenreBox';
import ProfileModal from './ProfileModal';
interface props {
	userObj: userType;
}
const NickName: React.FC<props> = ({ userObj }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const oClickJoinHandler = () => {
		setIsOpen(true);
	};
	const [user, setUser] = React.useState();
	React.useEffect(() => {
		axios.get(`/user/${userObj.userIdx}`).then((res) => {
			setUser(res.data.user);
		});
	}, []);
	return (
		<>
			<Container onClick={oClickJoinHandler}>{userObj.nickname}</Container>
			{isOpen && <ProfileModal setIsOpen={setIsOpen} userObj={userObj} />}
		</>
	);
};
export default NickName;
export interface userType {
	userIdx: number;
	kakaotalkId: string;
	nickname: string;
	reliability: number;
	genres: genreType[];
}
const Container = styled.button`
	font-size: medium;
	font-weight: bold;
`;
