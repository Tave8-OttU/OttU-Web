import { recruitPost } from '../components/Recruit/Content';

const SET_POSTLIST = 'recruitList/SET_POSTLIST';
const SET_CURR = 'recruitList/SET_CURR';
const APPLY = 'recruitList/APPLY';
const ACCEPT = 'recruitList/ACCEPT';
const COMPLETION = 'recruitList/COMPLETION';

export interface recuritObj {
	postObj: recruitPost;
	isWriter: boolean;
	isApplying?: boolean;
}
const initialState = {
	postList: [],
	currentIdx: 0,
};
export const setPostList = (postList: recuritObj[]) => {
	return {
		type: SET_POSTLIST,
		postList,
	};
};
export const setCurrIdx = (idx: number) => {
	return {
		type: SET_CURR,
		idx,
	};
};
export const participate = (idx: number) => {
	return {
		type: APPLY,
		idx,
	};
};

export const accept = (idx: number, isAccept: boolean) => {
	return {
		type: ACCEPT,
		isAccept,
		idx,
	};
};

export const completion = (idx: number) => {
	return {
		type: COMPLETION,
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
		case SET_CURR:
			return {
				...state,
				currentIdx: action.idx,
			};
		case APPLY:
			return {
				...state,
				postList: state.postList.map((post: recuritObj) =>
					post.postObj.recruitIdx === action.idx
						? { ...post, isApplying: true }
						: post
				),
			};
		case ACCEPT:
			return {
				...state,
				postList: state.postList.map((post: recuritObj, idx) =>
					idx === action.idx
						? {
								...post,
								postObj: {
									...post.postObj,
									choiceNum:
										post.postObj.choiceNum + (action.isAccept ? 1 : -1),
								},
						  }
						: post
				),
			};
		case COMPLETION:
			return {
				...state,
				postList: state.postList.map((post: recuritObj, idx) =>
					idx === action.idx
						? {
								...post,
								postObj: {
									...post.postObj,
									isCompleted: true,
								},
						  }
						: post
				),
			};
		default:
			return state;
	}
}
