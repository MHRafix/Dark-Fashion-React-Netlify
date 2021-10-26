import { useState, useEffect } from "react";

let LoadData = () => {
// This state for dispaly data in browser 
let [products, setProducts] = useState([]);
// Let's get data from database using useffect 
   useEffect( () => {
      // Let's get the data from json file using fetch api 
      fetch('./products.json')
      .then(response => response.json())
      .then(data => {
         setProducts(data);
      });
   }, []);
   return [products];
}

export default LoadData;
