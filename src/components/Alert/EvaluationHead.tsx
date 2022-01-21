import * as React from 'react';
import styled from 'styled-components';
import OttImg from '../common/OttImg';
interface props {
	ott: string;
}
const EvaluationHead: React.FC<props> = ({ ott }) => {
	return (
		<>
			<OttImg ott={ott} width="100px" />
			<h4>팀원 신뢰도 평가</h4>
			<Notice>
				오뜨 level에 반영되는 평가로 추후 사용자의 신뢰도를 나타내줍니다.
			</Notice>
		</>
	);
};
export default EvaluationHead;
const Notice = styled.span`
	font-size: small;
	font-weight: lighter;
	color: #c4c4c4;
`;
