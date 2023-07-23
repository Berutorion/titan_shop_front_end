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
        console.log("Response", response )
        // for(product in response.data){
        //     console.log("Product", product)
        // }
        return response;
    },
    getOneProductsBySellerId: async (id,productId) => {
        const response = await Service.API.call('get', `/product/seller/${id}/${productId}`);
        return response;
    },
    deleteProductById: async (id) => {
        const response = await Service.API.call('delete', `/product/${id}`);
        return response;
    }
}

export default product;