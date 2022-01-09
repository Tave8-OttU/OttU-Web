import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import { BlueBtn } from '../common/Buttons';
import NickNameForm from '../Setting/NickNameForm';
interface props {
	onSubmit: React.FormEventHandler<HTMLFormElement>;
	nickname: string;
	onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
	setIsCheckAll: React.Dispatch<React.SetStateAction<boolean>>;
}
const EditNickName: React.FC<props> = ({
	onSubmit,
	nickname,
	onChangeHandler,
	setIsCheckAll,
}) => {
	const { userObj } = useSelector((state: RootState) => state.user);
	return (
		<From className="col-container" onSubmit={onSubmit}>
			<span>기존 닉네임</span>
			<Prev>{userObj.nickname}</Prev>
			<NickNameForm
				nickname={nickname}
				onChangeHandler={onChangeHandler}
				setIsCheckAll={setIsCheckAll}
			/>
			<Notice>
				- 영소문/한글/숫자/_* 2-20자
				<br />- 영소문|한글 1자 이상 포함
			</Notice>
			<BlueBtn>변경</BlueBtn>
		</From>
	);
};
export default EditNickName;
export const Prev = styled.div`
	color: #c2c2c2;
	border-bottom: solid thin #c2c2c2;
	padding: 10px;
	font-size: small;
	width: 200px;
`;
export const Notice = styled.div`
	font-size: small;
	color: #c2c2c2;
	font-weight: lighter;
	line-height: 2;
	margin: 30px 0;
	text-align: center;
`;
const From = styled.form`
	gap: 30px;
	width: 100%;
	& > button {
		text-align: center;
		box-shadow: 5px 5px 20px 0 #45c7ff35;
	}
`;
