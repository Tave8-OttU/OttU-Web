const SET_LOGGED_INFO = 'user/SET_LOGGED_INFO'; // 로그인 정보 설정
const SET_USER_INFO = 'user/SET_USER_INFO';

interface userObj {
  id: number;
  nickname: string;
}
const initialState = {
  userObj: {
    id: -1,
    nickName: '',
  },
  isLoggedin: false,
};
export const setLoggedInfo = (userObj: userObj | null, isLoggedin: boolean) => {
  return {
    type: SET_LOGGED_INFO,
    userObj,
    isLoggedin,
  };
};

export const setUserInfo = (userObj: userObj) => {
  return {
    type: SET_USER_INFO,
    userObj,
  };
};
export default function user(state = initialState, action: any) {
  switch (action.type) {
    case SET_LOGGED_INFO:
      return {
        ...state,
        userObj: action.userObj,
        isLoggedin: action.isLoggedin,
      };
    case SET_USER_INFO:
      return { ...state, userObj: action.userObj };
    default:
      return state;
  }
}
