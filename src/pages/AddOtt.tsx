import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { postMyOttHandler } from '../apis/api/ott';
import { Otts } from '../assets/Objects/otts';
import AddForm from '../components/common/AddForm';
import Head from '../components/common/Head';
import { RootState } from '../modules';

const AddOtt: React.FC = () => {
	const navigate = useNavigate();
	const { userObj } = useSelector((state: RootState) => state.user);

	const onSubmit = (
		event: React.FormEvent,
		postObj: addPostObj,
		paymentDay: number
	) => {
		event.preventDefault();
		try {
			if (
				postObj.headcount === 0 ||
				postObj.platformIdx === -1 ||
				paymentDay === 0
			) {
				throw new Error('모든 내용이 선택되었는지 확인해주세요.');
			}
			postMyOttHandler(userObj.userIdx, postObj, paymentDay).then((res) => {
				navigate(`/myott/${Otts[postObj.platformIdx]}`);
			});
		} catch (err: any) {
			alert(err.message);
		}
	};
	return (
		<Container>
			<Head />
			<AddForm onSubmit={onSubmit} isAddOtt />
		</Container>
	);
};
export default AddOtt;
const Container = styled.div``;
export interface addPostObj {
	platformIdx: number;
	headcount: number;
}
