import axios from 'axios';
import { addPostObj } from '../../pages/AddOtt';
export const postMyOttHandler = async (
	userIdx: number,
	postObj: addPostObj,
	paymentDay: number
) => {
	try {
		const { data } = await axios.post(`/user/ott`, {
			...postObj,
			platformIdx: postObj.platformIdx + 1,
			userIdx,
			paymentDay,
		});
		return data;
	} catch (err) {
		console.log(err);
	}
};

export const getUserOttHandler = async (userIdx: number) => {
	try {
		const { data } = await axios.get(`/user/${userIdx}/ott`);
		return data;
	} catch (err) {
		console.log(err);
	}
};
