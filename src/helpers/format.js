
const format = {
    priceFormat: (price) => {
        if (price === undefined) {
            return 0;
        }
       price = Number.parseFloat(price).toFixed(2);
        return price.replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
}

export default format