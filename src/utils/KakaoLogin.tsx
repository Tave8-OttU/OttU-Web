import axios from 'axios';
/* 카카오 로그인 token 발급 REST API */
export const kakaoLoginHandler = async (code: string) => {
  const data: any = {
    grant_type: 'authorization_code',
    client_id: process.env.REACT_APP_KAKAO_REST_KEY,
    redirect_uri: 'http://localhost:3000/',
    code: code,
  };
  const queryString = Object.keys(data)
    .map((k: any) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');
  return new Promise((resolve, rejects) => {
    axios
      .post('https://kauth.kakao.com/oauth/token', queryString, {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      })
      .then((res) => {
        axios
          .post('/auth/kakao', {
            access_token: res.data.access_token,
          })
          .then((res) => {
            if (res.status == 201 || res.status == 200) {
              resolve({ data: { user: res.data.user, jwt: res.data.jwt } });
            }
          });
      });
  });
};
