import Service from "./Service";

const order = {
    getOrder: async (orderId) => {
        const response = await Service.API.call('get', `/order/${orderId}`);
        return response;
    }
};

export default order;