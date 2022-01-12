import { ott } from '../../pages/MyOtt';

export const getMyOttListName = async (raw: any) => {
	try {
		return raw.ottlist.map((ott: ott) => ott.platform.platformName);
	} catch (err) {
		console.log(err);
	}
};

export const getCurrOtt = async (raw: any, ott: string | undefined) => {
	try {
		const data = ott
			? raw.ottlist.filter((it: ott) => it.platform.platformName === ott)[0]
			: raw.ottlist[0];
		return data;
	} catch (err) {
		console.log(err);
	}
};
