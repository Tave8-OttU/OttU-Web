import axios from 'axios';
import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import Modal from '../common/Modal';
import AlertCard from './AlertCard';
interface props {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Alert: React.FC<props> = ({ setIsOpen }) => {
	const { userObj } = useSelector((state: RootState) => state.user);
	const [alertArr, setAlertArr] = React.useState<alertType[]>([]);
	React.useEffect(() => {
		axios.get(`/user/${userObj.userIdx}/notice`).then((res) => {
			console.log(res);

			setAlertArr(res.data.noticelist);
		});
	}, []);
	return (
		<Modal setIsOpen={setIsOpen}>
			<AlertContainer className="col-container">
				{alertArr.length === 0 ? (
					<Notice>알림 내역이 없습니다.</Notice>
				) : (
					alertArr.map((alert) => (
						<AlertCard
							content={alert.content}
							date={alert.createdDate + ''}
							teamIdx={alert.evaluateTeamIdx}
							isEvaluated={alert.isEvaluated}
						/>
					))
				)}
			</AlertContainer>
		</Modal>
	);
};
export default Alert;
export interface alertType {
	noticeIdx: number;
	content: string;
	createdDate: Date;
	evaluateTeamIdx?: number;
	isEvaluated: boolean;
}
const Notice = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #343434;
	padding: 10px;
	background-color: #00000075;
	font-size: small;
`;
const AlertContainer = styled.div`
	width: 300px;
	max-height: 500px;
	background-color: #343434;
	padding: 10px;
	border-radius: 10px;
	gap: 5px;
	overflow: scroll;
	position: absolute;
	right: 0;
	z-index: 1;
`;
