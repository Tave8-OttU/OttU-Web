import axios from 'axios';
import { addPostObj } from '../../pages/AddOtt';
export const postRecruitHandler = async (
	userIdx: number,
	postObj: addPostObj
) => {
	try {
		const { data } = await axios.post('/recruit/upload', {
			...postObj,
			platformIdx: postObj.platformIdx + 1,
			userIdx: userIdx,
		});
		return data;
	} catch (err) {
		console.log(err);
	}
};

export const getMyRecruitHandler = async (userIdx: number) => {
	try {
		const { data } = await axios.get(`/user/${userIdx}/recruit`);
		return data;
	} catch (err) {
		console.log(err);
	}
};

export const getWaitListHandler = async (recruitIdx: number) => {
	try {
		const { data } = await axios.get(`/recruit/${recruitIdx}/waitlist`);
		return data;
	} catch (err) {
		console.log(err);
	}
};

export const getRecruitListHandler = async (
	userIdx: number,
	platformIdx?: string
) => {
	try {
		const { data } = await axios.get(`/recruit/${platformIdx}/list/${userIdx}`);
		return data;
	} catch (err) {
		console.log(err);
	}
};

export const applyHandler = async (recruitIdx: number, userIdx: number) => {
	try {
		const { data } = await axios.post(`/recruit/participate`, {
			recruitIdx,
			userIdx,
		});
		return data;
	} catch (err) {
		console.log(err);
	}
};
export const getConfirmMemHandler = async (recruitIdx: number) => {
	try {
		const { data } = await axios.get(`/recruit/${recruitIdx}/members`);
		return data;
	} catch (err) {
		console.log(err);
	}
};

export const acceptHandler = async (waitlistIdx: number) => {
	try {
		const { data } = await axios.patch(`/recruit/waitlist/accept`, {
			waitlistIdx,
		});
		return data;
	} catch (err) {
		console.log(err);
	}
};

export const acceptCancelHandler = async (waitlistIdx: number) => {
	try {
		const { data } = await axios.patch(`/recruit/waitlist/cancel`, {
			waitlistIdx,
		});
		return data;
	} catch (err) {
		console.log(err);
	}
};

export const delRecruitHandler = async (recruitIdx: number) => {
	try {
		const { data } = await axios.delete(`/recruit/${recruitIdx}`);
		return data;
	} catch (err) {
		console.log(err);
	}
};
