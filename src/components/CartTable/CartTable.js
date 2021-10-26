import React from 'react';

const CartTable = (props) => {
let {cartProductsQnt} = props;

let totalQuantity = 0;


let total = 0;
let shipping = 0;
for(let product of cartProductsQnt){
    if(!product.quantity){
        product.quantity = 1;
    }
    total = total + product.salePrice * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
    shipping = (total / 100) * 5;
} 


let tax = ((total + shipping) / 100) * 5;
let grandTotal = total + shipping + tax;

    return (
        <div className="shoppingCart">
        <div className="cartTable">
        <div className="tableItems">
            <span className="item">Cart Items &nbsp;&nbsp;: </span><br />
            <span className="item">Total Price &nbsp;&nbsp;: </span><br />
            <span className="item">Shipping &nbsp;&nbsp;: </span><br />
            <span className="item">Tax &nbsp;&nbsp;: </span><br />
            <span className="item">Grand Total: </span>
        </div>
        <div className="tableValues">
            <span className="item">{totalQuantity}</span><br />
            <span className="item">$ {total.toFixed(2)}</span><br />
            <span className="item">$ {shipping.toFixed(2)}</span><br />
            <span className="item">$ {tax.toFixed(2)}</span><br />
            <span className="item">$ {grandTotal.toFixed(2)}</span>
        </div>   
        </div>
        {props.children}
    </div>
    );
};

export default CartTable;