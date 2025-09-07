import { renderOrderSummary,updateCheckOutValue } from './checkout/orderSummary.js';
import{renderPaymentSummary} from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
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

/*
Promise.all([
    loadProductsFetch(),
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
*/

async function loadPage(){
    try{
        // throw 'error1';
        await loadProductsFetch();
        //await can only be used when inside a async function
        const value= await new Promise((resolve,reject)=>{
            // throw 'error2';
            loadCart(()=>{
                // reject('error3');
                resolve('value3');
            });
        });
    }catch(error){
        console.log('Unexpected erorr! , pls try again later');
    }

    renderOrderSummary();
    renderPaymentSummary();


}
loadPage();
/*
loadPage().then((value)=>{
    console.log('next step');
    console.log(value);
})
*/
