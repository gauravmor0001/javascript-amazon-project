import { renderOrderSummary,updateCheckOutValue } from './checkout/orderSummary.js';
import{renderPaymentSummary} from './checkout/paymentSummary.js';
import { loadProducts } from '../data/products.js';
import {loadCart} from '../data/cart.js';
// import '../data/cart-class.js';
//import '../data/backend-practice.js';

/*
loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})
//this is call back in loadProducts and these function are executed when eventListener get activated.

*/


/*
new Promise((resolve)=>{
    loadProducts(()=>{
        resolve();
    });
}).then(()=>{
    return new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    });
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});

*/
// we can also call multiply promises simulataneously with the help of Promise.all 

Promise.all([
    new Promise((resolve)=>{
        loadProducts(()=>{
            resolve('value1');
        });
    }),
    new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    })
]).then((values)=>{
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});
