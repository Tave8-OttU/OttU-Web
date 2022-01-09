import * as React from 'react';
import NickName from '../../common/NickName';
import OttImg from '../../common/OttImg';
import { recruitPost } from '../Content';

interface props {
	postObj: recruitPost;
	isMine?: boolean;
}
const Head: React.FC<props> = ({ postObj, isMine }) => {
	return (
		<>
			{isMine ? (
				<OttImg ott={postObj.platform.platformName} width="80px" isWhite />
			) : (
				<NickName userIdx={postObj.writer.userIdx} />
			)}
		</>
	);
};
export default Head;
