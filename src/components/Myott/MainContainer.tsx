import * as React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { getUserOttHandler } from "../../apis/api/ott";
import { getCurrOtt } from "../../apis/services/ott";
import { RootState } from "../../modules";
import Content from "./Content";
import OttContainer from "./OttContainer";

const MainContainer: React.FC = () => {
	const { ott } = useParams();
	const { userObj } = useSelector((state: RootState) => state.user);

	const [ottList, setOttList] = React.useState<ott[]>([]);
	React.useEffect(() => {
		getUserOttHandler(userObj.userIdx).then((res) => {
			setOttList(res.ottlist);
			getCurrOtt(res, ott).then((res) => setOttObj(res));
		});
	}, [ott]);

	const [ottObj, setOttObj] = React.useState<ott | null>();
	return (
		<Container>
			{ottObj ? (
				<>
					<OttContainer
						ott={ott ? ott : ottObj?.platform.platformName}
						ottList={ottList}
					/>
					<Content ottObj={ottObj} />
				</>
			) : (
				<Notice>구독 중인 OTT가 없습니다.</Notice>
			)}
		</Container>
	);
};
export default MainContainer;
const Container = styled.div`
	display: flex;
	flex-direction: row;
	padding: 0px 50px;
	gap: 50px;
`;

const Notice = styled.div`
	background-color: #1a1a1a;
	text-align: center;
	width: 100%;
	border-radius: 10px;
	padding: 100px 50px;
	box-shadow: 20px 20px 20px 10px #00000025;
	margin-bottom: 50vh;
	color: #ffffff50;
`;

export interface ott {
	teamIdx: number;
	teamName: string;
	platform: {
		platformIdx: number;
		platformName: string;
	};
	headcount: number;
	paymentDay: number;
	paymentDate: Date;
}
