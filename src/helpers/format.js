
const format = {
    priceFormat: (price) => {
        if (price === undefined) {
            return 0;
        }
       price = Number.parseFloat(price).toFixed(2);
        return price.replace(/\d(?=(\d{3})+\.)/g, '$&,');
    },
    dateFormat: (date) => {
        if (date === undefined) {
            return '';
        }
        return date.replace(/T|:\d+\.\d+Z$/g, " ");
    }
}

export default format