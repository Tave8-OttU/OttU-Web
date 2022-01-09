import axios from 'axios';
import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import { BlueBtn } from '../common/Buttons';
import Modal from '../common/Modal';
import OttImg from '../common/OttImg';
import MemberBox from './MemberBox';
interface props {
	teamIdx: number;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const EvaluationBox: React.FC<props> = ({ teamIdx, setIsOpen }) => {
	const { userObj } = useSelector((state: RootState) => state.user);
	const [memberList, setMemberList] = React.useState<member[]>([]);
	React.useEffect(() => {
		axios.get(`/team/${teamIdx}/evaluation/${userObj.userIdx}`).then((res) => {
			setMemberList(res.data.userlist);
			setReliability(Array(res.data.userlist.length).fill(10));
		});
	}, []);

	const [reliability, setReliability] = React.useState<number[]>([]);
	const onClickHandler = () => {
		axios
			.post(`/team/${teamIdx}/evaluation`, {
				userIdx: userObj.userIdx,
				reliability: reliability,
			})
			.then((res) => {
				res.status === 200 && setIsOpen(false);
			});
	};
	return (
		<Modal setIsOpen={setIsOpen}>
			<Container className="col-container">
				<OttImg ott={'Tving'} width="100px" />
				<h4>팀원 신뢰도 평가</h4>
				<Notice>
					오뜨 level에 반영되는 평가로 추후 사용자의 신뢰도를 나타내줍니다.
				</Notice>
				<Wrapper className="col-container">
					{memberList.map((mem, idx) => (
						<MemberBox
							userIdx={mem.userIdx}
							setReliability={setReliability}
							idx={idx}
						/>
					))}
				</Wrapper>
				<Wrapper className="row-container">
					<BlueBtn style={{ color: 'white' }} onClick={onClickHandler}>
						확인
					</BlueBtn>
				</Wrapper>
			</Container>
		</Modal>
	);
};
export default EvaluationBox;
interface member {
	userIdx: number;
	nickname: string;
}
const Container = styled.div`
	background-color: white;
	position: fixed;
	color: black;
	width: 300px;
	padding: 20px;
	border-radius: 10px;
	top: 50%;
	left: 50%;
	gap: 20px;
	transform: translate(-50%, -50%);
	h4 {
		margin: 0;
		margin-top: 10px;
	}
	img {
		padding: 10px 0;
	}
	z-index: 1;
`;
const Wrapper = styled.div`
	gap: 10px;
	justify-content: center;
`;
const Notice = styled.span`
	font-size: small;
	font-weight: lighter;
	color: #c4c4c4;
`;
