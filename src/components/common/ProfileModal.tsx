import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import GenreBox from './GenreBox';
import LevelBox from './LevelBox';
import Modal from './Modal';
interface props {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ProfileModal: React.FC<props> = ({ setIsOpen }) => {
	const { userObj } = useSelector((state: RootState) => state.user.userObj);
	return (
		<Modal setIsOpen={setIsOpen}>
			<Container className="col-container">
				<Head className="row-container">
					<h2>{userObj.nickname}</h2>
				</Head>
				<LevelBox reliability={userObj.reliability} />
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
`;
