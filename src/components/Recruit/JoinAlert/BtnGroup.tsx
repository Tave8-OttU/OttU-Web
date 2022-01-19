import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { applyHandler } from "../../../apis/api/recurit";
import { RootState } from "../../../modules";
import { apply } from "../../../modules/recruitList";
import { GrayBorderBtn, RedBorderBtn } from "../../common/Buttons";
import { recruitPost } from "../Content";
interface props {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	postObj: recruitPost;
}
const BtnGroup: React.FC<props> = ({ setIsOpen, postObj }) => {
	const { userObj } = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch();
	const onClickHandler = () => {
		applyHandler(postObj.recruitIdx, userObj.userIdx).then((res) => {
			setIsOpen(false);
			dispatch(apply(postObj.recruitIdx));
		});
	};
	return (
		<Container className="row-container">
			<GrayBorderBtn onClick={onClickHandler}>참여</GrayBorderBtn>
			<RedBorderBtn onClick={() => setIsOpen(false)}>취소</RedBorderBtn>
		</Container>
	);
};
export default BtnGroup;
const Container = styled.div`
	gap: 20px;
	button {
		padding: 10px 25px;
		font-size: small;
		border-radius: 5px;
	}
`;
