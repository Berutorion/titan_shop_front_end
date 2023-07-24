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
    },
    addNewProduct: async (data) => {
        const userId = localStorage.getItem('userId');
      const response = await Service.API.call('post', '/product', {seller:userId,...data});
        return response;
    },
    updateProduct: async (id, data) => {
        const response = await Service.API.call('put', `/product/${id}`, data);
        return response;
    }
}

export default product;