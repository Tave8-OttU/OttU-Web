import { recruitPost } from '../components/Recruit/Content';

const SET_POSTLIST = 'recruitList/SET_POSTLIST';
const PARTICIPATE = 'recruitList/PARTICIPATE';

export interface recuritObj {
	postObj: recruitPost;
	isWriter: boolean;
	isParticipated?: boolean;
}
const initialState = {
	postList: [],
};
export const setPostList = (postList: recuritObj[]) => {
	return {
		type: SET_POSTLIST,
		postList,
	};
};
export const participate = (idx: number) => {
	return {
		type: PARTICIPATE,
		idx,
	};
};
export default function recruitList(state = initialState, action: any) {
	switch (action.type) {
		case SET_POSTLIST:
			return {
				...state,
				postList: action.postList,
			};
		case PARTICIPATE:
			return {
				...state,
				postList: state.postList.map((post: recuritObj) =>
					post.postObj.recruitIdx === action.idx
						? { ...post, isParticipated: true }
						: post
				),
			};
		default:
			return state;
	}
}
