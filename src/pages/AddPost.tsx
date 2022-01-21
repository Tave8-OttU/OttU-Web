import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { postRecruitHandler } from '../apis/api/recurit';
import { Otts } from '../assets/Objects/otts';
import AddForm from '../components/common/AddForm';
import Head from '../components/common/Head';
import { RootState } from '../modules';
import { addPostObj } from './AddOtt';
const AddPost: React.FC = () => {
	const navigate = useNavigate();
	const { userObj } = useSelector((state: RootState) => state.user);

	const [isCheck, setIsCheck] = React.useState(false);
	const onSubmit = (event: React.FormEvent, postObj: addPostObj) => {
		event.preventDefault();
		try {
			if (postObj.headcount === 0 || postObj.platformIdx === -1 || !isCheck) {
				throw new Error('모든 내용이 선택되었는지 확인해주세요.');
			}
			postRecruitHandler(userObj.userIdx, postObj).then((res) => {
				navigate(
					`/recruit/${Otts[postObj.platformIdx]}?idx=${postObj.platformIdx + 1}`
				);
			});
		} catch (err: any) {
			alert(err.message);
		}
	};
	return (
		<Container>
			<Head />
			<AddForm onSubmit={onSubmit} setIsCheck={setIsCheck} />
		</Container>
	);
};
export default AddPost;
const Container = styled.div``;
