import * as React from 'react';
import styled from 'styled-components';
import { BorderGrayLabel } from './Labels';
interface props {
	genres: genreType[];
}
const GenreBox: React.FC<props> = ({ genres }) => {
	return (
		<Container className="col-container">
			<span>관심 장르</span>
			<Wrapper className="row-container">
				{genres.map((genre) => (
					<BorderGrayLabel>{genre.genreName}</BorderGrayLabel>
				))}
			</Wrapper>
		</Container>
	);
};
export default GenreBox;
export interface genreType {
	genreIdx: number;
	genreName: string;
}
const Container = styled.div`
	color: #45c7ff;
	gap: 20px;
`;
const Wrapper = styled.div`
	gap: 10px;
	color: white;
	font-size: small;
`;
