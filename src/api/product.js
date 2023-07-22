import Service from './Service';

const product = {
    getProducts: async () => {
        const response = await Service.API.call('get', '/product');
        return response;
    },
    getProductById: async (id) => {
        const response = await Service.API.call('get', `/product/${id}`);
        return response;
    }
}

export default product;