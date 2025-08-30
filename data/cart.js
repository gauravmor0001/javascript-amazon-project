 export let cart;
 loadFromStorage();

export function loadFromStorage(){
  cart=JSON.parse(localStorage.getItem('cart'));
  // const cartItems = cart.map((item) => item.quantity)
  // const cartQuantity = cartItems.reduce((acc, x) => acc + x, 0)
  // document.getElementsByClassName("cart-quantity js-cart-quantity")[0].innerText = cartQuantity
  // console.log(document.getElementsByClassName("cart-quantity js-cart-quantity"))
  if(!cart){
    cart=[{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity:2,
      deliveryOptionId:'1'
    },
    {
      productId:'54e0eccd-8f36-462b-b68a-8182611d9add',
      quantity:1,
      deliveryOptionId:'2'
    }];
  }
 }

function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));

}

 export function addToCart(productId){
  // console.log("p id recv", productId)
  let matchingItem;
  // console.log("exists ?", document.querySelector(`.js-quantity-selector-${productId}`));
  // let SelectedQuantity=document.querySelector(`.js-quantity-selector-${productId}`)?.value;
  // SelectedQuantity=Number(SelectedQuantity);

    cart.forEach((cartItem)=>{
      if(productId === cartItem.productId){
        matchingItem=cartItem;
      }
    });
    if(matchingItem){
      matchingItem.quantity+=1;
    }else{
      cart.push({
        productId: productId,
        quantity:1,
        deliveryOptionId:'1'
    });
    }

    saveToStorage();
}

export function removeFromCart(productId){
  const newCart=[];

  cart.forEach((cartItem)=>{
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  cart=newCart;
  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId){
  let matchingItem;

  cart.forEach((cartItem)=>{
    if(productId === cartItem.productId){
      matchingItem=cartItem;
    }
  });
  matchingItem.deliveryOptionId=deliveryOptionId;
  saveToStorage();

}