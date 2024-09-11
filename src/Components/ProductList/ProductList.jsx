// import React, { useContext } from 'react';
// import { CartContext } from './CartContext';
// import {getProducts} from '../../Config/api';

// const ProductList = () => {
//   const { dispatch } = useContext(CartContext);

//   const getProducts = async () => {
//     try {
//       const res = await axios.get(`https://fakestoreapi.com/products?limit=20`);
//       console.log(res);
//       return res;
//     } catch (err) {
//       console.error(err);
//     }
//   };
//    return (
//     <div>
//     {products.map(product => (
//       <div key={product.id}>
//         <h3>{product.name}</h3>
//         <p>${product.price}</p>
//         <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}>
//           Add to Cart
//         </button>
//       </div>
//     ))}
//   </div>
//    )
// }
