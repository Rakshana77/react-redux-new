
// import { useSelector, useDispatch } from 'react-redux';
// import {  removeItem, updateQuantity } from './cartSlice.jsx';

// const CartPage = () => {
//   const items = useSelector(state => state.cart.items);
//   const dispatch = useDispatch();

//   const handleQuantityChange = (id, quantity) => {
//     dispatch(updateQuantity({ id, quantity }));
//   };

//   const handleRemoveItem = id => {
//     dispatch(removeItem({ id }));
//   };

//   const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

//   return (
//     <div className="cart-page">
//       <h2>Shopping Cart</h2>
//       {items.map(item => (
//         <div key={item.id} className="cart-item">
//           <img src={item.thumbnail} alt={item.title} />
//           <div className="item-details">
//             <h3>{item.title}</h3>
//             <p>{item.description}</p>
//             <p>Price: ${item.price}</p>
//             <label>Quantity: 
//               <input 
//                 type="number" 
//                 value={item.quantity} 
//                 onChange={e => handleQuantityChange(item.id, parseInt(e.target.value, 10))} 
//               />
//             </label>
//             <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
//           </div>
//         </div>
//       ))}
//       <div className="total">
//         <p>Total Quantity: {items.reduce((acc, item) => acc + item.quantity, 0)}</p>
//         <p>Total Amount: ${totalPrice.toFixed(2)}</p>
//       </div>
//     </div>
//   );
// };

// export default CartPage;

import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './cartSlice';
import products from './products';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CartPage.css';

const CartPage = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemoveItem = id => {
    dispatch(removeItem({ id }));
  };

  const handleAddItem = product => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="cart-page container mt-5">
      <h2 className="mb-4">Products</h2>
      <div className="row mb-5">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <img src={product.thumbnail} alt={product.title} className="card-img-top" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ${product.price}</p>
                <button 
                  className="btn btn-primary mt-auto" 
                  onClick={() => handleAddItem(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mb-4">Shopping Cart</h2>
      <div className="row">
        {items.map(item => (
          <div key={item.id} className="cart-item col-12 mb-3 p-3 border rounded">
            <div className="row">
              <div className="col-md-2">
                <img src={item.thumbnail} alt={item.title} className="img-fluid rounded" />
              </div>
              <div className="col-md-10">
                <div className="item-details">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-description">{item.description}</p>
                  <p className="item-price">Price: ${item.price}</p>
                  <div className="item-quantity">
                    <label className="me-2">Quantity: </label>
                    <input 
                      type="number" 
                      value={item.quantity} 
                      onChange={e => handleQuantityChange(item.id, parseInt(e.target.value, 10))} 
                      className="form-control d-inline-block w-auto" 
                      min="0"
                    />
                  </div>
                  <button 
                    className="btn btn-danger mt-2"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="total mt-4 p-3 border rounded">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartPage;