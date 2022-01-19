import axios from "axios";
import { getKakaoTokenHandler, LoginHandler } from "../apis/api/user";

export const kakaoLoginHandler = async (code: string) => {
	const data: any = {
		grant_type: "authorization_code",
		client_id: process.env.REACT_APP_KAKAO_REST_KEY,
		redirect_uri: "http://localhost:3000/",
		code: code,
	};
	const queryString = Object.keys(data)
		.map((k: any) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
		.join("&");
	return new Promise((resolve, rejects) => {
		getKakaoTokenHandler(queryString).then((res) => {
			LoginHandler(res.access_token).then((res) => {
				axios.defaults.headers.common["authorization"] = `${res.jwt}`;
				resolve({ user: res.user, jwt: res.jwt });
			});
		});
	});
};

export const autoLoginHandler = async () => {
	return new Promise((resolve, rejects) => {
		LoginHandler().then((res) => {
			resolve({ user: res.user });
		});
	});
};
export const kakaoLogoutHandler = async () => {
	return new Promise((resolve, rejects) => {
		localStorage.clear();
		resolve({ status: 200 }); /* 
		axios
			.get(
				`https://kauth.kakao.com/oauth/logout?client_id=${process.env.REACT_APP_KAKAO_REST_KEY}&logout_redirect_uri=http://localhost:3000/`
			)
			.then((res) => {
				localStorage.clear();
				resolve({ status: 200 });
			}); */
	});
};
