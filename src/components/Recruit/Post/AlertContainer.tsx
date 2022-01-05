import * as React from 'react';
import { recruitPost } from '../Content';
import CruitAlert from '../CruitAlert/CruitAlert';
import JoinAlert from '../JoinAlert/JoinAlert';
interface props {
	postObj: recruitPost;
	isWriter: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const AlertContainer: React.FC<props> = ({ postObj, isWriter, setIsOpen }) => {
	return (
		<>
			{isWriter ? (
				<CruitAlert postObj={postObj} setIsOpen={setIsOpen} />
			) : (
				<JoinAlert postObj={postObj} setIsOpen={setIsOpen} />
			)}
		</>
	);
};
export default AlertContainer;
