
//add event handler
function handleBtn(field, price){
    const productCost = document.getElementById(field);
    productCost.innerText = price;
    subTotal();
}

// add subtotal
function subTotal(){
    const bestPrice = document.getElementById('best-price');
    const memoryPrice = document.getElementById('memory-cost');
    const sotragePrice = document.getElementById('storage-cost');
    const deliveryPrice =  document.getElementById('delivery-cost');
    const subTotal = document.getElementById('subtotal');
    const totalPrice = document.getElementById('total-price');

    const subTotalprice = parseFloat(bestPrice.innerText) + parseFloat(memoryPrice.innerText) + parseFloat(sotragePrice.innerText) + parseFloat(deliveryPrice.innerText);
    
    subTotal.innerText = subTotalprice;
    totalPrice.innerText = subTotalprice;
}

//add btn event handler
document.getElementById('add-btn').addEventListener('click', function(){
    const totalPrice = document.getElementById('total-price');
    const subTotal = document.getElementById('subtotal');
    const subTotalprice = subTotal.innerText;
    const promoInput = document.getElementById('promo-input');
    const promoText = promoInput.value;
    
    if( promoText == 'stevekaku'){
        const total = parseFloat(subTotalprice) * 20 / 100;
        const totalText = subTotalprice-total;
        totalPrice.innerText = totalText;

        promoInput.value = '';
    }
    else{
        alert('your promo code is invalid');
    }
    
})
