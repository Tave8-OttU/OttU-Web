import * as React from 'react';
import styled from 'styled-components';
import GenreBox from './GenreBox';
import LevelBox from './LevelBox';
import Modal from './Modal';
import { userType } from './NickName';
interface props {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	userObj: userType;
}
const ProfileModal: React.FC<props> = ({ setIsOpen, userObj }) => {
	return (
		<Modal setIsOpen={setIsOpen}>
			<Container className="col-container">
				<Head className="row-container">
					<h2>{userObj.nickname}</h2>
				</Head>
				<LevelBox reliability={userObj.reliability} isFirst={userObj.isFirst} />
				<GenreBox genres={userObj.genres} />
			</Container>
		</Modal>
	);
};
export default ProfileModal;
const Head = styled.div`
	width: 100%;
	h2 {
		margin: 0;
		flex: 1;
	}
`;
const Container = styled.div`
	background-color: white;
	position: absolute;
	color: black;
	width: 300px;
	padding: 20px;
	border-radius: 10px;
	display: flex;
	gap: 20px;
	z-index: 2;
`;
