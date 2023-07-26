import Service from "./Service";

const cart = {
    getCartByUserId: async () => {
        const userId = localStorage.getItem('userId');
        const response = await Service.API.call('get', `/cart/${userId}`);
        return response;
    },
    addToCart: async (productId, quantity) => {
        const userId = localStorage.getItem('userId');
        const response = await Service.API.call('post', '/cart', {productId, quantity, userId});
        return response;
    },
    updateCart: async (cartId, quantity) => {
        const response = await Service.API.call('put', `/cart/${cartId}`, {quantity});
        return response;
    },
    deleteFromCart: async (productId) => {
        const response = await Service.API.call('delete', '/cart', {productId});
        return response;
    },
    purchase: async () => {
        const userId = localStorage.getItem('userId');
        const response = await Service.API.call('post', '/cart/purchase/', {userId});
        return response;
    },
    getTotalPrice: async () => {
        const response = await Service.API.call('get', '/cart/totalPrice');
        return response;
    }

};

export default cart;