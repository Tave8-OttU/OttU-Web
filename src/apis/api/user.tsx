import axios from 'axios';
export const getKakaoTokenHandler = async (queryData: string) => {
	try {
		const { data } = await axios.post(
			'https://kauth.kakao.com/oauth/token',
			queryData,
			{
				headers: {
					'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
				},
			}
		);
		return data;
	} catch (err) {
		console.log(err);
	}
};

export const LoginHandler = async (access_token?: string) => {
	try {
		const { data } = await axios.post(
			'/auth/kakao',
			access_token && { access_token: access_token }
		);
		return data;
	} catch (err) {
		console.log(err);
	}
};
export const nickCheckHandler = async (nickname: string) => {
	try {
		const { data } = await axios.get(`/user/nickname/${nickname}`);
		return data;
	} catch (err) {
		console.log(err);
	}
};
export const getUserHandler = async (userIdx: number) => {
	try {
		const { data } = await axios.get(`/user/${userIdx}`);
		return data;
	} catch (err) {
		console.log(err);
	}
};
export const patchUserHandler = async (
	userIdx: number,
	userObj: { kakaotalkId?: string; nickname?: string; genres?: number[] }
) => {
	try {
		const { data } = await axios.patch(`/user/${userIdx}`, {
			...userObj,
		});
		return data;
	} catch (err) {
		console.log(err);
	}
};

export const withDrawUserHandler = async (userIdx: number) => {
	try {
		const { data } = await axios.delete(`/user/${userIdx}`);
		return data;
	} catch (err) {
		console.log(err);
	}
};

export const getUserAlertHandler = async (userIdx: number) => {
	try {
		const { data } = await axios.get(`/user/${userIdx}/notice`);
		return data;
	} catch (err) {
		console.log(err);
	}
};
