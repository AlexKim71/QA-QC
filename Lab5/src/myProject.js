const axios = require('axios');

function calculateTotal(items) {
    return items.reduce((sum, item) => sum + item.price, 0);
}
function applyDiscount(total, discountPercent) {
    return total - (total * (discountPercent / 100));
}
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
function checkout(items, discountPercent) {
    const total = calculateTotal(items);
    return applyDiscount(total, discountPercent);
}
async function getUserProfile(userId) {
    const response = await axios.get(`https://api.example.com/users/${userId}`);
    return response.data;
}
module.exports = { calculateTotal, applyDiscount, validateEmail, checkout, getUserProfile };