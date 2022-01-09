import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components';
import { Otts, Prices } from '../../assets/Objects/otts';
import Modal from '../common/Modal';
interface props {
	ott?: string;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setFilterValue: React.Dispatch<React.SetStateAction<number>>;
}
const FilterSelect: React.FC<props> = ({ ott, setIsOpen, setFilterValue }) => {
	const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setFilterValue(parseInt(event.target.value));
	};
	return (
		<Modal setIsOpen={setIsOpen} isNoneBG>
			<Container className="row-container">
				<Select onChange={onChangeHandler}>
					<option value="default" selected hidden>
						인원수
					</option>
					{Prices[Otts.findIndex((it) => it === ott)].map((p) => (
						<option value={p.headCount}>{p.headCount}</option>
					))}
					<option value={0}>모두 보기</option>
				</Select>
				<Btn type="button">
					<FontAwesomeIcon icon={faChevronDown} />
				</Btn>
			</Container>
		</Modal>
	);
};
export default FilterSelect;
const Container = styled.div``;
const Select = styled.select`
	appearance: none;
	padding: 10px;
	padding-right: 40px;
	border-radius: 5px;
	color: #737373;
	background-color: #00000010;
	border: none;
	cursor: pointer;
	font-size: small;
	z-index: 1;
`;
const Btn = styled.button`
	position: absolute;
	color: #737373;
	transform: translate(5vw);
	z-index: 0;
`;
