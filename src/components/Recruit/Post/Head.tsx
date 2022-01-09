import * as React from 'react';
import NickName from '../../common/NickName';
import OttImg from '../../common/OttImg';
import { recruitPost } from '../Content';

interface props {
	postObj: recruitPost;
	isMyPost?: boolean;
}
const Head: React.FC<props> = ({ postObj, isMyPost }) => {
	return (
		<>
			{isMyPost ? (
				<OttImg ott={postObj.platform.platformName} width="80px" isWhite />
			) : (
				<NickName userIdx={postObj.writer.userIdx} />
			)}
		</>
	);
};
export default Head;
