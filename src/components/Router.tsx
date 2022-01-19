import * as React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RootState } from '../modules';
import AddOtt from '../pages/AddOtt';
import AddPost from '../pages/AddPost';
import EditProfile from '../pages/EditProfile';
import Login from '../pages/Login';
import Main from '../pages/Main';
import MyOtt from '../pages/MyOtt';
import MyPost from '../pages/MyPost';
import Recruit from '../pages/Recruit';
import Setting from '../pages/Setting';
const AppRouter: React.FC = () => {
	const { isLoggedin, isSet } = useSelector((state: RootState) => state.user);

	return (
		<Router>
			<Routes>
				{!isLoggedin ? (
					<Route path="/" element={<Login />} />
				) : (
					<>
						{!isSet ? (
							<Route path="/" element={<Setting />} />
						) : (
							<Route path="/" element={<Main />} />
						)}
						<Route path="/myott" element={<MyOtt />}>
							<Route path=":ott" element={<MyOtt />} />
						</Route>
						<Route path="/recruit" element={<Recruit />}>
							<Route path=":ott" element={<Recruit />} />
						</Route>
						<Route path="/addott" element={<AddOtt />} />
						<Route path="/posting" element={<AddPost />} />
						<Route path="/profile/edit" element={<EditProfile />}>
							<Route path=":type" element={<EditProfile />} />
						</Route>
						<Route path="/profile/mypost" element={<MyPost />} />
					</>
				)}
			</Routes>
		</Router>
	);
};
export default AppRouter;
