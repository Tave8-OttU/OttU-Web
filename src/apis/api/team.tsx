import axios from 'axios';
export const postTeamHandler = async (
	recruitIdx: number,
	userIdx: number,
	paymentDay: number
) => {
	try {
		const { data } = await axios.post(`/team`, {
			recruitIdx,
			userIdx,
			paymentDay,
		});
		return data;
	} catch (err) {
		console.log(err);
	}
};

export const delTeamHandler = async (teamIdx: number) => {
	try {
		const { data } = await axios.delete(`/team/${teamIdx}`);
		return data;
	} catch (err) {
		console.log(err);
	}
};

export const getMemberHandler = async (teamIdx: number, userIdx: number) => {
	try {
		const { data } = await axios.get(`/team/${teamIdx}/evaluation/${userIdx}`);
		return data;
	} catch (err) {
		console.log(err);
	}
};

export const evalueTeamHandler = async (
	teamIdx: number,
	userIdx: number,
	reliability: number[]
) => {
	try {
		const { data } = await axios.post(`/team/${teamIdx}/evaluation`, {
			userIdx,
			reliability,
		});
		return data;
	} catch (err) {
		console.log(err);
	}
};
