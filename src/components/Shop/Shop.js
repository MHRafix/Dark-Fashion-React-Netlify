import React, { useEffect, useState } from 'react';
import CartTable from '../CartTable/CartTable';
import Card from '../ProductsCards/Card';
import './Shop.css';
import {useHistory} from 'react-router-dom';
import {addToDb, getStoredCart} from '../utilities/fakedb';
const Shop = () => {
   // This state for dispaly data in browser 
   let [products, setProducts] = useState([]);
   // This state for add product to cart 
   let [cart, setCart] = useState([]);
   
   // Use useHistory for conditional routing 
   let history = useHistory();

   let handleCart = () => {
      if(cart.length > 0){
         history.push("/cart");
      }else{
         alert('Plaese add to cart some product first!');
      }
   }
   //Search Products State
   let [displayProducts, setDisplayProducts] = useState([]);
   // Let's get data from database using useffect 
   useEffect( () => {
      // Let's get the data from json file using fetch api 
      fetch('./products.json')
      .then(response => response.json())
      .then(data => {
         setProducts(data);
         setDisplayProducts(data);
      });
   }, []);

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
       console.log(addedProducts);
      }
      }
      setCart(storedCart);
      }
    
   }, [products]);

   // This Handle function for adding data to data base
   let handleCartBtn = (productObject) => {
      let existProd = cart.find(pd => pd.id === productObject.id);
      let newCart = [];
      if(existProd){
         let rest = cart.filter(pd => pd.id !== productObject.id);
         existProd.quantity = existProd.quantity + 1;
         newCart = [...rest, productObject];
      }else{
         productObject.quantity = 1;
         newCart = [...cart, productObject];
      }
      setCart(newCart);
      
      // Save Cart Cookie to localStorage 
      addToDb(productObject.id);

   }
    
   let handleSearchEvent = event => {
     let searchingText = event.target.value;
     let searchingRasult = products.filter(product => product.name.toLowerCase().includes(searchingText.toLowerCase()));
   //   console.log(searchingRasult.length);
   setDisplayProducts(searchingRasult);
   }
    return (
        <main className="mainContent">
            <div className="row w-100 justify-content-between">
            <div className="col-lg-9 col-md-9 col-sm-12 px-4">
               <div className="div">
                  <div className="dataDetails">
                     <span className="totalData">Total products found : {displayProducts.length}</span>
                     <input type="search" onChange={handleSearchEvent} placeholder="Search your products..." />
                  </div>
               </div>
                <div className="row">

                  {
                  //  Let's map the getting data from database or json file 
                  
                     displayProducts.map(product => <Card   productInfo={product} handleCartBtn={handleCartBtn} key={product.id}/>)
                  }
                  </div>
              </div>
                <div className="col-lg-2 col-md-2 col-sm-6">
                  <CartTable cartProductsQnt={cart}>
                    <button onClick={handleCart} className="cartBtn w-100">View Cart</button>
                   </CartTable>
                </div>
              </div>
        </main>
    );
};

export default Shop;