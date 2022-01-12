import * as React from 'react';
import styled from 'styled-components';
import { nickCheckHandler } from '../../apis/api/user';
import { WhiteRoundBtn } from '../common/Buttons';

interface props {
	nickname: string;
	onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
	setIsCheckAll: React.Dispatch<React.SetStateAction<boolean>>;
}
const NickNameForm: React.FC<props> = ({
	nickname,
	onChangeHandler,
	setIsCheckAll,
}) => {
	const [notice, setNotice] = React.useState('');
	const onCheckHandler = () => {
		nickCheckHandler(nickname).then((res) => {
			if (res.isExisted) {
				setNotice('이미 사용 중인 닉네임입니다.');
				setIsCheckAll(false);
			} else {
				setNotice('사용 가능합니다.');
				setIsCheckAll(true);
			}
			checkValidHandler(nickname);
		});
	};

	const checkValidHandler = (nickname: string) => {
		let valNick = /^[가-힣a-z0-9_*]{2,20}$/g;
		let valNick2 = /[가-힣|a-z]/;
		if (!(valNick.test(nickname) && valNick2.test(nickname))) {
			setNotice(
				'닉네임 조건을 확인해주세요.\n영소문/한글/숫자/_* [2-20자](영소문|한글 1자 이상)'
			);
			setIsCheckAll(false);
		} else {
			setIsCheckAll(true);
		}
	};
	return (
		<Container className="col-container">
			<span>닉네임</span>
			<Wrapper className="row-container">
				<input
					type="text"
					placeholder="영소문/한글/숫자/_* [2-20자]"
					name="nickname"
					value={nickname}
					onChange={onChangeHandler}
					required
				/>
				<WhiteRoundBtn type="button" onClick={onCheckHandler}>
					중복 확인
				</WhiteRoundBtn>
			</Wrapper>
			<Notice isBlue={notice === '사용 가능합니다.'}>
				{notice.split('\n').map((it) => (
					<>
						{it}
						<br />
					</>
				))}
			</Notice>
		</Container>
	);
};
export default NickNameForm;
const Container = styled.div`
	gap: 20px;
	width: 100%;
`;
const Wrapper = styled.div`
	button {
		font-size: small;
		margin-left: 10px;
		color: black;
	}
	input[type='text'] {
		border-bottom: solid thin #45c7ff;
		padding: 10px;
		font-size: small;
		width: 200px;
	}
`;
const Notice = styled.span<{ isBlue: boolean }>`
	font-size: x-small;
	color: #ee6a61;
	margin-left: 10px;
	${(props) => props.isBlue && `color:#45c7ff`}
`;
