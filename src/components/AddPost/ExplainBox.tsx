import * as React from 'react';
import styled from 'styled-components';
interface props {
	setIsCheck: React.Dispatch<React.SetStateAction<boolean>>;
}
const ExplainBox: React.FC<props> = ({ setIsCheck }) => {
	return (
		<Container className="col-container">
			<span>진행 방법</span>
			<Wrapper className="col-container">
				<Box>
					<span>1.</span>
					<Content>참여자 모집 글 작성</Content>
				</Box>
				<Box>
					<span>2.</span>
					<Content>
						참여자 중 팀원 선택
						<br />
						<span>*오뜨 level과 프로필을 참고하세요.</span>
					</Content>
				</Box>
				<Box>
					<span>3.</span>
					<Content>팀원 선택 후, 팀원의 카카오 아이디 확인</Content>
				</Box>
				<Box>
					<span>4.</span>
					<Content>1주일 내로, 팀원들과 소통후 결제일자 입력</Content>
				</Box>
			</Wrapper>
			<Notice>*팀원 중 한명이라도 해지의사를 밝히면 팀은 해체됩니다.</Notice>
			<Notice>
				*팀 해체시, 오뜨 level에 적용되는 팀원간의 평가가 이루어집니다.
			</Notice>
			<CheckBox className="row-container">
				<input type="checkbox" onChange={() => setIsCheck((p) => !p)} />
				<span>위 사항들을 확인했습니다.</span>
			</CheckBox>
		</Container>
	);
};
export default ExplainBox;
const Container = styled.div`
	background-color: #00000030;
	padding: 20px;
	border-radius: 10px;
	gap: 20px;
`;
const Wrapper = styled.div`
	gap: 20px;
`;
const Box = styled.div`
	background-color: #00000030;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	border-radius: 5px;
`;
const Notice = styled.span`
	font-size: small;
	color: #ffa49e;
`;
const Content = styled.span`
	color: #45c7ff;
	text-align: right;
	span {
		font-size: x-small;
		color: white;
		font-weight: lighter;
	}
`;

const CheckBox = styled.div`
	margin-top: 20px;
	gap: 10px;
	span {
		font-weight: lighter;
	}
`;
