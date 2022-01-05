import * as React from 'react';
import styled from 'styled-components';
const NoticeContainer: React.FC = () => {
	return (
		<>
			<Notice color="#FFA49E">
				* 요청시 작성자에게 카카오 아이디가 공개되며 이를 통해 팀원간 연락이
				가능합니다.
			</Notice>
			<Notice color="#C4C4C4">
				작성자가 요청 수락시, 팀원으로 모집됩니다.
			</Notice>
		</>
	);
};
export default NoticeContainer;
export const Notice = styled.span<{ color?: string }>`
	font-size: small;
	text-align: center;
	color: ${(props) => props.color};
`;
