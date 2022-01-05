import * as React from 'react';
import styled from 'styled-components';
import { Prices } from '../../../assets/Objects/otts';
import Modal from '../../common/Modal';
import PriceInfo from '../../common/PriceInfo';
import TeamInfo from '../../common/TeamInfo';
import { recruitPost } from '../Content';
import BtnGroup from './BtnGroup';
import NoticeContainer from './NoticeContainer';
interface props {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	postObj: recruitPost;
}
const JoinAlert: React.FC<props> = ({ setIsOpen, postObj }) => {
	const headcount = postObj.headcount;
	const platform = postObj.platform.platformIdx - 1;
	const ott = Prices[platform].find((p) => p.headCount === headcount);

	return (
		<Modal setIsOpen={setIsOpen}>
			<Container>
				<h2>참여 요청하시겠습까?</h2>
				<PriceInfo type={ott ? ott.title : ''} price={ott ? ott.price : 0} />
				<TeamInfo people={headcount} price={ott ? ott.price : 0} />
				<NoticeContainer />
				<BtnGroup setIsOpen={setIsOpen} postObj={postObj} />
			</Container>
		</Modal>
	);
};
export default JoinAlert;
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
