import * as React from 'react';
import styled from 'styled-components';
import { getUserHandler } from '../../apis/api/user';
import { genreType } from './GenreBox';
import ProfileModal from './ProfileModal';
interface props {
	userIdx: number;
}
const NickName: React.FC<props> = ({ userIdx }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const oClickJoinHandler = () => {
		setIsOpen(true);
	};
	const [user, setUser] = React.useState<userType>();
	React.useEffect(() => {
		getUserHandler(userIdx).then((res) => {
			setUser(res.user);
		});
	}, [userIdx]);
	return (
		<>
			{user && (
				<>
					<Container type="button" onClick={oClickJoinHandler}>
						{user?.nickname}
					</Container>
					{isOpen && <ProfileModal setIsOpen={setIsOpen} userObj={user} />}
				</>
			)}
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
	isFirst: boolean;
}
const Container = styled.button`
	font-size: medium;
	font-weight: bold;
`;
