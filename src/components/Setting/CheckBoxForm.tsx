import * as React from 'react';
import styled from 'styled-components';
import { Genres } from '../../assets/Objects/Genres';
interface props {
	genreArr: number[];
	setGenreArr: React.Dispatch<React.SetStateAction<number[]>>;
}
const CheckBoxForm: React.FC<props> = ({ genreArr, setGenreArr }) => {
	const onClickHandler = (event: React.MouseEvent) => {
		const {
			currentTarget: { id },
		} = event;
		if (!genreArr.includes(parseInt(id))) {
			genreArr.length < 3 && setGenreArr((p) => [...p, parseInt(id)]);
		} else {
			setGenreArr(genreArr.filter((it) => it != parseInt(id)));
		}
	};
	return (
		<>
			<Label>
				컨텐츠 관심 장르<span>*최대 3개</span>
			</Label>
			<CheckBoxContainer>
				{Genres.map((genre, idx) => (
					<GrayBtn
						type="button"
						onClick={onClickHandler}
						isChecked={genreArr.includes(idx + 1)}
						id={idx + 1 + ''}
					>
						{genre}
					</GrayBtn>
				))}
			</CheckBoxContainer>
		</>
	);
};
export default CheckBoxForm;
const Label = styled.span`
	span {
		font-size: x-small;
	}
`;
const CheckBoxContainer = styled.div`
	width: 350px;
`;
const GrayBtn = styled.button<{ isChecked?: boolean }>`
	margin-right: 20px;
	margin-bottom: 20px;
	font-size: small;
	display: inline-block;
	background-color: #535353;
	border-radius: 50px;
	padding: 10px 20px;
	${(props) =>
		props.isChecked &&
		`
    border:solid thin #45c7ff;
  `}
`;
