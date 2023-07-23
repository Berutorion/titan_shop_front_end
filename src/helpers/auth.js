
const auth = {
    isBuyer: () => {
        return localStorage.getItem('userRole') === 'buyer';
    },
    isSeller: () => {
        return localStorage.getItem('userRole') === 'seller';
    },
    isLogin: () => {
        return localStorage.getItem('token') !== null;
    }

}

export default auth;