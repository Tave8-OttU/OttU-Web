import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddOtt from '../pages/AddOtt';
import AddPost from '../pages/AddPost';
import EditProfile from '../pages/EditProfile';
import Login from '../pages/Login';
import Main from '../pages/Main';
import MyOtt from '../pages/MyOtt';
import Recruit from '../pages/Recruit';
import Setting from '../pages/Setting';
const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/main" element={<Main />} />
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
      </Routes>
    </Router>
  );
};
export default AppRouter;
