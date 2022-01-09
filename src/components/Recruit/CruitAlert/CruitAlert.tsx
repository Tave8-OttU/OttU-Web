import axios from 'axios';
import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../modules';
import Modal from '../../common/Modal';
import { recruitPost } from '../Content';
import CruitCompleteAlert from '../CruitCompleteAlert/CruitCompleteAlert';
import BtnGroup from './BtnGroup';
import Head from './Head';
import ListContainer from './ListContainer';
interface props {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const CruitAlert: React.FC<props> = ({ setIsOpen }) => {
	const { postList, currentIdx } = useSelector(
		(state: RootState) => state.recruitList
	);
	const post = postList[currentIdx].postObj;
	const [isCompleted, setIsCompleted] = React.useState(post.isCompleted);

	return (
		<Modal setIsOpen={setIsOpen}>
			{isCompleted ? (
				<CruitCompleteAlert
					setIsOpen={setIsOpen}
					rid={post.recruitIdx}
					platform={post.platform.platformName}
				/>
			) : (
				<Container>
					<Head postObj={post} />
					<ListContainer rid={post.recruitIdx} />
					<BtnGroup
						postObj={post}
						setIsOpen={setIsOpen}
						setIsCompleted={setIsCompleted}
					/>
				</Container>
			)}
		</Modal>
	);
};
export default CruitAlert;
const Container = styled.div`
	background-color: white;
	position: fixed;
	color: black;
	width: 300px;
	padding: 20px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	top: 50%;
	left: 50%;
	gap: 20px;
	transform: translate(-50%, -50%);
	z-index: 1;
`;
