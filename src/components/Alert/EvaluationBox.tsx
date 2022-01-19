import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { evalueTeamHandler, getMemberHandler } from "../../apis/api/team";
import { RootState } from "../../modules";
import { BlueBtn } from "../common/Buttons";
import Modal from "../common/Modal";
import EvaluationHead from "./EvaluationHead";
import MemberBox from "./MemberBox";
interface props {
	teamIdx: number;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	ott: string;
}
const EvaluationBox: React.FC<props> = ({ teamIdx, setIsOpen, ott }) => {
	const { userObj } = useSelector((state: RootState) => state.user);

	const [memberList, setMemberList] = React.useState<member[]>([]);
	const [reliability, setReliability] = React.useState<number[]>([]);
	React.useEffect(() => {
		getMemberHandler(teamIdx, userObj.userIdx).then((res) => {
			setMemberList(res.userlist);
			setReliability(Array(res.userlist.length).fill(10));
		});
	}, []);

	const onClickHandler = () => {
		evalueTeamHandler(teamIdx, userObj.userIdx, reliability).then((res) => {
			setIsOpen(false);
		});
	};

	return (
		<Modal setIsOpen={setIsOpen}>
			<Container className="col-container">
				<EvaluationHead ott={ott} />
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
					<BlueBtn style={{ color: "white" }} onClick={onClickHandler}>
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
