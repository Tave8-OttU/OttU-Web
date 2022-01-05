import axios from 'axios';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { RootState } from '../../../modules';
import { BlueBtn } from '../../common/Buttons';
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
	const navigate = useNavigate();
	const onSubmit = () => {
		axios
			.post(`/team`, {
				recruitIdx: rid,
				userIdx: userObj.userIdx,
				paymentDay: date,
			})
			.then((res) => {
				res.status === 201 && navigate(`/myott/${platform}`);
			});
	};
	return (
		<Modal setIsOpen={setIsOpen}>
			<Container onSubmit={onSubmit}>
				<Head />
				<ListContainer rid={rid} />
				<DateInfo setDate={setDate} />
				<BlueBtn type="submit" style={{ color: 'white' }}>
					완료
				</BlueBtn>
			</Container>
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
	gap: 25px;
	transform: translate(-50%, -50%);
`;
