import {addToCart,cart,loadFromStorage} from '../../data/cart.js';

describe('test suite: addToCart',()=>{
    it('adds an existing product to the cart',()=>{
        spyOn(localStorage,'setItem');
        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
        loadFromStorage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(2);
    });
    it('adds a new product to the cart',()=>{
        spyOn(localStorage,'setItem');
        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([]);
            //here we are changing the localStorage.getItem but the cart has already been read from localStorage so we need to reada gain localStorage.this code does not cahnge the memory.we are reading the localStorage at the start of the cart.js file.
        });
        loadFromStorage();
        //now when we call this function localstorage return null value.

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        //this will call a function called saveToStorage() which will change the  localStorage but we dont wont to change it so we make a fake method of localStorage which is LocalStorage.setItem on the 8th line(first line after it line)
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
    });
});

