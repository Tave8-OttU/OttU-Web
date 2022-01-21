import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getUserHandler, patchUserHandler } from '../../apis/api/user';
import { RootState } from '../../modules';
import { setSettingInfo, setUserInfo } from '../../modules/user';
import { BlueBtn } from '../common/Buttons';
import logo from '../../assets/images/logo_s.png';
import SettingForm from './SettingForm';
const Form: React.FC = () => {
	const { userObj } = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch();

	const [genreArr, setGenreArr] = React.useState<number[]>([]);
	const [infoObj, setInfoObj] = React.useState({
		nickname: '',
		kakaotalkId: '',
	});
	const onChangeHandler = React.useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const {
				target: { name, value },
			} = event;
			setInfoObj((p) => ({ ...p, [name]: value }));
		},
		[]
	);

	const [isCheckAll, setIsCheckAll] = React.useState(false);
	const onSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		try {
			if (!isCheckAll) {
				throw new Error('입력 사항을 다 확인해주세요.');
			}
			patchUserHandler(userObj.userIdx, {
				...infoObj,
				genres: genreArr,
			}).then(() => {
				getUserHandler(userObj.userIdx).then((res) => {
					dispatch(setUserInfo(res.user));
					dispatch(setSettingInfo(true));
				});
			});
		} catch (err: any) {
			alert(err.message);
		}
	};

	return (
		<FormContainer onSubmit={onSubmitHandler}>
			<TextWrapper>
				<h1>서비스 이용을 위한 기본 정보를 기입해주세요.</h1>
				<BlueBtn type="submit">완료</BlueBtn>
				<img src={logo} />
			</TextWrapper>
			<Wrapper className="container">
				<SettingForm
					infoObj={infoObj}
					onChangeHandler={onChangeHandler}
					genreArr={genreArr}
					setGenreArr={setGenreArr}
					setIsCheckAll={setIsCheckAll}
				/>
			</Wrapper>
		</FormContainer>
	);
};
export default Form;

const TextWrapper = styled.div`
	flex: 0.5;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 20px;
	button {
		padding: 15px 60px;
		font-size: large;
		box-shadow: 10px 10px 20px 10px #45c7ff10;
	}
	img {
		position: absolute;
		bottom: 100px;
		left: 100px;
		width: 200px;
	}
	h1 {
		font-weight: lighter;
	}
`;
const FormContainer = styled.form`
	display: flex;
	flex-direction: row;
	margin-top: 50px;
`;
const Wrapper = styled.div`
	gap: 50px;
	flex: 0.5;
	h1 {
		font-weight: lighter;
	}
`;
