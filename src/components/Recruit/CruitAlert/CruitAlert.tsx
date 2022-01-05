import * as React from 'react';
import styled from 'styled-components';
import Modal from '../../common/Modal';
import { recruitPost } from '../Content';
import CruitCompleteAlert from '../CruitCompleteAlert/CruitCompleteAlert';
import BtnGroup from './BtnGroup';
import Head from './Head';
import ListContainer from './ListContainer';
interface props {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	postObj: recruitPost;
}
const CruitAlert: React.FC<props> = ({ postObj, setIsOpen }) => {
	const [isCompletion, setIsCompletion] = React.useState(
		postObj.choiceNum === postObj.headcount
	);

	return (
		<Modal setIsOpen={setIsOpen}>
			{isCompletion ? (
				<CruitCompleteAlert
					setIsOpen={setIsOpen}
					rid={postObj.recruitIdx}
					platform={postObj.platform.platformName}
				/>
			) : (
				<Container>
					<Head postObj={postObj} />
					<ListContainer postObj={postObj} />
					<BtnGroup
						postObj={postObj}
						setIsOpen={setIsOpen}
						setIsCompletion={setIsCompletion}
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
`;
