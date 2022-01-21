const SET_LOGGED_INFO = 'user/SET_LOGGED_INFO'; // 로그인 정보 설정
const SET_SETTING_INFO = 'user/SET_SETTING_INFO'; // 로그인 정보 설정
const SET_USER_INFO = 'user/SET_USER_INFO';

interface userObj {
  userIdx: number;
  nickname: string;
}
const initialState = {
  userObj: {
    id: -1,
    nickname: '',
  },
  isLoggedin: false,
  isSet: false,
};
export const setLoggedInfo = (userObj: userObj | null, isLoggedin: boolean) => {
  return {
    type: SET_LOGGED_INFO,
    userObj,
    isLoggedin,
  };
};
export const setSettingInfo = (isSet: boolean) => {
  return {
    type: SET_SETTING_INFO,
    isSet,
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
    case SET_SETTING_INFO:
      return {
        ...state,
        isSet: action.isSet,
      };
    case SET_USER_INFO:
      return { ...state, userObj: action.userObj };
    default:
      return state;
  }
}
