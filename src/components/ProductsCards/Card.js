import React from 'react';
import Rating from 'react-rating';

const Card = (props) => {
    // Let's destructure the products data

     let {image, name, regularPrice, salePrice, ratting} = props.productInfo;
    return (
        <div className="col-lg-4 col-md-4 col-sm-10">
        <div className="productCard">
           <div className="productImage">
               <img src={image} alt="images" />
            </div>
             <div className="productDetails">
                <h2 className="title">{name}</h2>
                <span className="regularPrice">$ {regularPrice}</span>
                <span className="salePrice">$ {salePrice}</span>
                <span className="rattings">
                    <Rating readonly
                      initialRating={ratting}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    />
                    </span><br />
                <button className="cartBtn" onClick={() => props.handleCartBtn(props.productInfo)}>Add To Cart</button>
             </div>
          </div>
        </div>
    );
};

export default Card;