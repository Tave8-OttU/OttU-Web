import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLoggedInfo } from '../modules/user';
import { autoLoginHandler, kakaoLogoutHandler } from '../utils/KakaoLogin';
import Footer from './common/Footer';
import AppRouter from './Router';

const App = () => {
	const token = JSON.parse(localStorage.getItem('token') + '');
	const dispatch = useDispatch();
	useEffect(() => {
		if (token) {
			autoLoginHandler(token.access_token).catch((err) => {
				/* 				kakaoLogoutHandler().then((res: any) => {
					res.status === 200 && dispatch(setLoggedInfo(null, false));
				}); */
			});
		}
	}, []);
	return (
		<>
			<AppRouter />
			<Footer />
		</>
	);
};

export default App;
