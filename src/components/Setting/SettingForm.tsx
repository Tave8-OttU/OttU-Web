import * as React from 'react';
import styled from 'styled-components';
import CheckBoxForm from './CheckBoxForm';
import KakaoIdForm from './KakaoIdForm';
import NickNameForm from './NickNameForm';
interface Formprops {
	infoObj: {
		nickname: string;
		kakaotalkId: string;
	};
	onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
	interestArr: number[];
	setInterestArr: React.Dispatch<React.SetStateAction<number[]>>;
	setIsCheckAll: React.Dispatch<React.SetStateAction<boolean>>;
}
const SettingForm: React.FC<Formprops> = ({
	infoObj,
	onChangeHandler,
	interestArr,
	setInterestArr,
	setIsCheckAll,
}) => {
	return (
		<Container className="col-container">
			<NickNameForm
				nickname={infoObj.nickname}
				onChangeHandler={onChangeHandler}
				setIsCheckAll={setIsCheckAll}
			/>
			<KakaoIdForm
				kakaotalkId={infoObj.kakaotalkId}
				onChangeHandler={onChangeHandler}
			/>
			<CheckBoxForm interestArr={interestArr} setInterestArr={setInterestArr} />
		</Container>
	);
};
export default SettingForm;

const Container = styled.div`
	background-color: #1a1a1a;
	padding: 50px;
	border-radius: 10px;
	gap: 30px;
	box-shadow: 10px 10px 20px 10px #00000020;
	input[type='text'] {
		border-bottom: solid thin #45c7ff;
		padding: 10px;
	}
`;
