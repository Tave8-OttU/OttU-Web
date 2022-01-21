import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { setLoggedInfo } from '../modules/user';
import { autoLoginHandler, kakaoLogoutHandler } from '../utils/KakaoLogin';
import Footer from './common/Footer';
import AppRouter from './Router';

const App = () => {
	const { isLoggedin } = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		if (isLoggedin) {
			autoLoginHandler().catch((err) => {
				kakaoLogoutHandler().then((res: any) => {
					dispatch(setLoggedInfo(null, false));
				});
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
