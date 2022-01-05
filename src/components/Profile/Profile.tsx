import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import GenreBox from '../common/GenreBox';
import LevelBox from '../common/LevelBox';
import MyAccount from './MyAccount';
import MyInfo from './MyInfo';
import MyOttU from './MyOttU';
interface props {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Profile: React.FC<props> = ({ setIsOpen }) => {
	const { userObj } = useSelector((state: RootState) => state.user);
	const wrapperRef = React.useRef<HTMLImageElement>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (wrapperRef && !wrapperRef.current?.contains(event.target as Node)) {
			setIsOpen(false);
		} else {
			setIsOpen(true);
		}
	};
	React.useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	});

	return (
		<Container>
			<ProfileContainer className="col-container" ref={wrapperRef}>
				<h2>{userObj.nickname}</h2>
				<LevelBox reliability={userObj.reliability} />
				<GenreBox genres={userObj.genres} />
				<MyOttU />
				<MyInfo />
				<MyAccount />
			</ProfileContainer>
		</Container>
	);
};
export default Profile;
const ProfileContainer = styled.div`
	width: 300px;
	background-color: #343434;
	padding: 20px;
	gap: 20px;
	overflow: scroll;
`;
const Container = styled.div`
	position: fixed;
	display: flex;
	justify-content: flex-end;
	width: 100vw;
	height: 100%;
	top: 0;
	background-color: #00000050;
	z-index: 9;
`;
