import Service from './Service';

const product = {
    getProducts: async () => {
        const response = await Service.API.call('get', '/product');
        return response;
    },
    getProductById: async (id) => {
        const response = await Service.API.call('get', `/product/${id}`);
        return response;
    },
    getProductsBySellerId: async (id) => {
        const response = await Service.API.call('get', `/product/seller/${id}`);
        return response;
    },
    getOneProductsBySellerId: async (id,productId) => {
        const response = await Service.API.call('get', `/product/seller/${id}/${productId}`);
        return response;
    }
}

export default product;