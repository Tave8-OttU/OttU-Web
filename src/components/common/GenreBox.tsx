import * as React from 'react';
import styled from 'styled-components';
import { BorderGrayLabel } from './Labels';
interface props {
  genres: string[];
}
const GenreBox: React.FC<props> = ({ genres }) => {
  return (
    <Container className="col-container">
      <span>관심 장르</span>
      <Wrapper className="row-container">
        {genres.map((genre) => (
          <BorderGrayLabel>{genre}</BorderGrayLabel>
        ))}
      </Wrapper>
    </Container>
  );
};
export default GenreBox;
const Container = styled.div`
  color: #45c7ff;
  gap: 10px;
`;
const Wrapper = styled.div`
  gap: 10px;
  color: white;
`;
