import * as React from 'react';
import styled from 'styled-components';
import { addPostObj } from '../../pages/AddOtt';
import DateBoxForm from '../Addott/DateBoxForm';
import OttForm from '../Addott/OttForm';
import PriceBoxForm from '../Addott/PriceBoxForm';
import ExplainBox from '../AddPost/ExplainBox';
import { BlueBtn } from './Buttons';

const AddForm: React.FC<props> = ({ onSubmit, isAddOtt, setIsCheck }) => {
	const [postObj, setPostObj] = React.useState({
		platformIdx: -1,
		headcount: 0,
	});
	const [date, setDate] = React.useState(0);

	const onClickHandler = (event: React.MouseEvent, type: string) => {
		const {
			currentTarget: { id },
		} = event;
		setPostObj((p) => ({ ...p, [type]: parseInt(id) }));
	};
	return (
		<Body onSubmit={(e) => onSubmit(e, postObj, date)}>
			<Wrapper className="col-container">
				<OttForm
					platform={postObj.platformIdx}
					onClickHandler={onClickHandler}
				/>
			</Wrapper>
			<Wrapper className="col-container">
				<BlueBtn type="submit">{isAddOtt ? '추가' : '작성'}</BlueBtn>
				<PriceBoxForm postObj={postObj} onClickHandler={onClickHandler} />
				{isAddOtt ? (
					<DateBoxForm setDate={setDate} />
				) : (
					setIsCheck && <ExplainBox setIsCheck={setIsCheck} />
				)}
			</Wrapper>
		</Body>
	);
};
export default AddForm;
interface props {
	onSubmit: (
		event: React.FormEvent,
		postObj: addPostObj,
		paymentDay: number
	) => void;
	isAddOtt: boolean;
	setIsCheck?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Wrapper = styled.div`
	width: 100%;
	span {
		font-weight: bold;
	}
	& > button {
		width: 100px;
		text-align: center;
		align-self: flex-end;
		margin-bottom: 30px;
	}
`;
const Body = styled.form`
	display: flex;
	flex-direction: row;
	padding: 50px;
	gap: 50px;
	background-color: #1a1a1a;
	margin: 50px;
	border-radius: 10px;
	box-shadow: 20px 20px 20px 10px #00000025;
`;
