import React from 'react';

const CartTableData = (props) => {
    let {name, salePrice, quantity, image, id} = props.product;
    return (
  <tbody className=" text-dark fs-3">
    <tr>
      <td><img className="rounded-circle" width="100" height="100" src={image} alt="" /></td>
      <td>{name}</td>
      <td>$ {salePrice}</td>
      <td>{quantity} Pice</td>
      <td><span style={{cursor:"pointer"}} onClick={() => props.handleRemoveBtn(id)} className="fas fa-trash text-danger"></span></td>
    </tr>
  </tbody>
    );
};

export default CartTableData;