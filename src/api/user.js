import Service from './service';

const user = {
    login: async (params) => {
        const response = await Service.API.call('post', '/login', {account: params.account, password: params.password});
        localStorage.setItem('token', response?.token?response.token:'');
        localStorage.setItem('userRole', response?.role?response.role:'');
        localStorage.setItem('userId', response?.role?response.userId:'');
        return response;
    },
    register: async (email, password) => {
        const response = await Service.call('post', '/register', { email, password });
        return response;
    },
    getUserById: async (id) => {
        const response = await Service.API.call('get', `/user/${id}`);
        localStorage.setItem('user', response.data)
        return response;
    }
}

export default user;