import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components';
import { userType } from '../common/NickName';
import OttImg from '../common/OttImg';
import FilterSelect from './FilterSelect';
import PostContainer from './PostContainer';
interface props {
	ott?: string;
}
const Content: React.FC<props> = ({ ott }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [filterValue, setFilterValue] = React.useState(0);
	React.useEffect(() => {
		setFilterValue(0);
	}, [ott]);
	return (
		<Container className="col-container">
			<Head>
				<OttImg ott={ott ? ott : ''} width="100px" />
				{isOpen ? (
					<FilterSelect
						ott={ott}
						setIsOpen={setIsOpen}
						setFilterValue={setFilterValue}
					/>
				) : (
					<FilterBtn onClick={() => setIsOpen(true)}>
						<FontAwesomeIcon icon={faSlidersH} />
					</FilterBtn>
				)}
			</Head>
			<PostContainer filterValue={filterValue} />
		</Container>
	);
};
export default Content;
export interface recruitPost {
	recruitIdx: number;
	platform: {
		platformIdx: number;
		platformName: string;
	};
	writer: userType;
	headcount: number;
	choiceNum: number;
	isApplying: boolean;
	isCompleted: boolean;
	createdDate: string;
}
const Head = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: white;
	padding: 20px;
	border-radius: 10px;
	height: 40px;
`;
const FilterBtn = styled.button`
	color: #73737350;
	&:hover {
		color: #737373;
	}
`;
const Container = styled.div`
	background-color: #1a1a1a;
	flex: 0.6;
	border-radius: 10px;
	padding: 20px;
	gap: 30px;
	box-shadow: 20px 20px 20px 10px #00000025;
`;
