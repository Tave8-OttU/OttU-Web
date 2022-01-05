import axios from 'axios';
import React, { useEffect } from 'react';
import AppRouter from './Router';

const App = () => {
  const token = JSON.parse(localStorage.getItem('token') + '');
  useEffect(() => {
    axios.defaults.headers.common['authorization'] = `${token?.access_token}`;
  }, [token]);
  return <AppRouter />;
};

export default App;
