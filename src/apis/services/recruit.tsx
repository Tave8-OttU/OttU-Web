import { recruitPost } from '../../components/Recruit/Content';

export const getRecruitFilterList = async (
	raw: any,
	filterValue: number,
	userIdx: number
) => {
	try {
		const data =
			filterValue === 0
				? raw.recruitlist.map((post: recruitPost) => ({
						postObj: { ...post },
						isWriter: post.writer.userIdx === userIdx,
						isApplying: post.isApplying,
				  }))
				: raw.recruitlist
						.filter((p: recruitPost) =>
							filterValue === 0 ? true : p.headcount === filterValue
						)
						.map((post: recruitPost) => ({
							postObj: { ...post },
							isWriter: post.writer.userIdx === userIdx,
							isApplying: post.isApplying,
						}));
		return data;
	} catch (err) {
		console.log(err);
	}
};

export const getMyRecruitList = async (raw: any, userIdx: number) => {
	try {
		const data = raw.recruitlist.map((post: recruitPost) => ({
			postObj: { ...post },
			isWriter: post.writer.userIdx === userIdx,
		}));
		return data;
	} catch (err) {
		console.log(err);
	}
};
