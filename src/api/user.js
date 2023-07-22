import Service from './service';

const user = {
    login: async (params) => {
        const response = await Service.API.call('post', '/login', {account: params.account, password: params.password});
        localStorage.setItem('token', response?.token?response.token:'');
        localStorage.setItem('userRole', response?.userRole?response.userRole:'');
        return response;
    },
    register: async (email, password) => {
        const response = await Service.call('post', '/register', { email, password });
        return response;
    },
}

export default user;