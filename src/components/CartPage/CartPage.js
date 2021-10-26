import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CartTable from '../CartTable/CartTable';
import CartTableData from '../CartTableData/CartTable';
import useLoadData from '../DataLoadFunc/LoadDataFunc';
import { clearTheCart, deleteFromDb, getStoredCart } from '../utilities/fakedb';

const CartPage = () => {
    let [products] = useLoadData();
    let [cart, setCart] = useState([]);
    
    let history = useHistory();

    useEffect(() => {

        if(products.length){
        let savedCart = getStoredCart();
        let storedCart = [];
        for(let key in savedCart){
       let addedProducts = products.find(p => p.id === key );
       
       if(addedProducts){
          const quantity = savedCart[key];
          addedProducts.quantity = quantity;
         // Reassign cart products
         storedCart.push(addedProducts);
        //  console.log(addedProducts);
        }
        }
        setCart(storedCart);
        }
      
     }, [products]);
     
     let handleRemove = id => {
       let solidProduct = cart.filter(prod => prod.id !== id);
       setCart(solidProduct);
       deleteFromDb(id);
     }

     let handleCheckout = () => {
      if(cart.length > 0){
        setCart([]);
        clearTheCart();
        history.push("/checkout");
      }else{
        alert("Please add to cart some product first!");
      }

     }
    return (
        <div className="carttbl mt-5">
              <h1>Cart Page && Cart Products</h1>
            <div className="row px-3 mt-5">
              <div className="col-lg-9 col-md-9 col-sm-12">
                <table className="table">
                  <thead className="bg-dark text-white">
                    <tr>
                      <th scope="col">Image</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Unit Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  {
                    cart.map(product => <CartTableData key={product.id} handleRemoveBtn={handleRemove} product={product} />)
                  } 
                  </table>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12">
                  <CartTable cartProductsQnt={cart}>
                    <button onClick={handleCheckout} className="cartBtn w-100">Checkout Now</button>
                    </CartTable>
                </div>
              </div>
            </div>
    );
};

export default CartPage;