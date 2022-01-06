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
	idx: number;
}
const CruitAlert: React.FC<props> = ({ setIsOpen, idx }) => {
	const { postList } = useSelector((state: RootState) => state.recruitList);
	const post = postList[idx].postObj;
	const [isCompletion, setIsCompletion] = React.useState(
		post.choiceNum === post.headcount
	);

	return (
		<Modal setIsOpen={setIsOpen}>
			{isCompletion ? (
				<CruitCompleteAlert
					setIsOpen={setIsOpen}
					rid={post.recruitIdx}
					platform={post.platform.platformName}
				/>
			) : (
				<Container>
					<Head postObj={post} />
					<ListContainer postObj={post} />
					<BtnGroup
						postObj={post}
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
