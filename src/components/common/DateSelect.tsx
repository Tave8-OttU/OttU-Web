import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components';
interface props {
	setDate: React.Dispatch<React.SetStateAction<number>>;
}
const DateSelect: React.FC<props> = ({ setDate }) => {
	const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const {
			target: { value },
		} = event;
		setDate(parseInt(value));
	};
	return (
		<Wrapper className="row-container">
			매월
			<Select onChange={onChange}>
				<option value="defalut" selected hidden>
					일자
				</option>
				{Array(30)
					.fill(0)
					.map((it, idx) => (
						<option value={idx + 1}>{idx + 1}</option>
					))}
			</Select>
			<Btn type="button">
				<FontAwesomeIcon icon={faChevronDown} />
			</Btn>
			일
		</Wrapper>
	);
};
export default DateSelect;
const Select = styled.select`
	appearance: none;
	padding: 10px;
	padding-right: 40px;
	border: solid thin #45c7ff;
	border-radius: 5px;
	color: #bcbcbc;
	background-color: transparent;
	cursor: pointer;
	font-size: small;
	z-index: 1;
`;
const Wrapper = styled.div`
	gap: 10px;
`;
const Btn = styled.button`
	position: absolute;
	color: #45c7ff;
	transform: translate(50%, 1.3vw);
	z-index: 0;
`;
