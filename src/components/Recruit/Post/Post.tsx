import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../modules';
import AlertContainer from './AlertContainer';
import Head from './Head';
import RecruitInfo from './RecruitInfo';
import Side from './Side';
interface props {
	idx: number;
	isMine?: boolean;
}
const Post: React.FC<props> = ({ idx, isMine }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const { postList } = useSelector((state: RootState) => state.recruitList);
	return (
		<>
			<Container
				className="row-container"
				isWhite={isMine}
				isOver={postList[idx].postObj.isCompleted}
			>
				<Body className="col-container">
					<Head postObj={postList[idx].postObj} isMine={isMine} />
					<RecruitInfo postObj={postList[idx].postObj} />
				</Body>
				<Side idx={idx} setIsOpen={setIsOpen} />
			</Container>
			{isOpen && (
				<AlertContainer
					idx={idx}
					isWriter={postList[idx].isWriter}
					setIsOpen={setIsOpen}
				/>
			)}
		</>
	);
};
export default Post;
const Body = styled.div`
	gap: 30px;
`;
const Container = styled.div<{ isWhite?: boolean; isOver?: boolean }>`
	background-color: ${(props) => (props.isWhite ? '#ffffff' : `#00000030`)};
	font-size: small;
	padding: 20px;
	${(props) => props.isWhite && `color:gray;`};
	${(props) =>
		props.isOver &&
		`
	opacity:60%;`}
`;
