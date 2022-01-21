import * as React from 'react';
import CruitAlert from '../CruitAlert/CruitAlert';
import JoinAlert from '../JoinAlert/JoinAlert';
interface props {
	idx: number;
	isWriter: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const AlertContainer: React.FC<props> = ({ idx, isWriter, setIsOpen }) => {
	return (
		<>
			{isWriter ? (
				<CruitAlert setIsOpen={setIsOpen} />
			) : (
				<JoinAlert idx={idx} setIsOpen={setIsOpen} />
			)}
		</>
	);
};
export default AlertContainer;
