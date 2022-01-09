import axios from 'axios';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { RootState } from '../../../modules';
import { BlueBtn, GrayBorderBtn } from '../../common/Buttons';
import Modal from '../../common/Modal';
import DateInfo from './DateInfo';
import Head from './Head';
import ListContainer from './ListContainer';
interface props {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	rid: number;
	platform: string;
}
const CruitCompleteAlert: React.FC<props> = ({ setIsOpen, rid, platform }) => {
	const { userObj } = useSelector((state: RootState) => state.user);
	const [date, setDate] = React.useState(0);
	const onSubmit = () => {
		axios
			.post(`/team`, {
				recruitIdx: rid,
				userIdx: userObj.userIdx,
				paymentDay: date,
			})
			.then((res) => {
				res.status === 201 && setIsOpen(false);
			});
	};
	const [isTimeOut, setIsTimeOut] = React.useState(false);
	React.useEffect(() => {
		axios.get(`/recruit/${rid}/waitlist`).then((res) => {
			setIsTimeOut(res.data.timeout);
		});
	}, []);
	return (
		<Modal setIsOpen={setIsOpen}>
			{isTimeOut ? (
				<Container onSubmit={onSubmit}>
					모집 확정후, 1주일이 지나 팀 모집이 취소되었습니다.
					<GrayBorderBtn type="button" onClick={() => setIsOpen(false)}>
						확인
					</GrayBorderBtn>
				</Container>
			) : (
				<Container onSubmit={onSubmit}>
					<Head />
					<ListContainer rid={rid} />
					<DateInfo setDate={setDate} />
					<BlueBtn type="submit" style={{ color: 'white' }}>
						완료
					</BlueBtn>
				</Container>
			)}
		</Modal>
	);
};
export default CruitCompleteAlert;
const Container = styled.form`
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
	gap: 30px;
	transform: translate(-50%, -50%);
`;
