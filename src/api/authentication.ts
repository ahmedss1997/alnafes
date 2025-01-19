import { post, get } from './server';

// const AuthenticationAPI = {
//   login: (credentials) => post(`/api/Auth/Login`, credentials, false),
//   register: (data) => post('/auth/register', data, false),
//   resetPassword: (email) => post('/auth/reset-password', { email }, false),
//   getUserProfile: () => get('/auth/profile', true),
// };

class AuthenticationAPI {
  static async login(request: any): Promise<any> {
    return post('/api/Auth/Login', request, false);
  }  
}

export default AuthenticationAPI;
