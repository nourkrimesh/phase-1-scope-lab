// Write your solution in this file!
var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'monica';

function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    return bestCustomer = 'not bob';
}

function overwriteBestCustomer(name) {
    return bestCustomer = name
}

function changeLeastFavoriteCustomer(name) {
    return leastFavoriteCustomer = name
}