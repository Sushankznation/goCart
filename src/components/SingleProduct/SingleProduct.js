import React, {useState} from 'react';
import "./SingleProduct.scss";

// Importing the necessary Redux hooks
import { useSelector, useDispatch } from 'react-redux';
import { setIsModalVisible } from '../../store/modalSlice';
import { addToCart } from '../../store/cartSlice';

// Importing the necessary routing hooks
import { useNavigate } from 'react-router-dom';

// Importing a helper function for formatting prices
import { formatPrice } from '../../utils/helpers';

const SingleProduct = () => {

  // Initializing the necessary Redux and routing hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Initializing state for the product quantity
  const [qty, setQty] = useState(1);

  // Getting the product data from the Redux store
  const { data: product } = useSelector(state => state.modal);

  // Handler function for increasing the product quantity
  const increaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty + 1;
      return newQty;
    })
  }

  // Handler function for decreasing the product quantity
  const decreaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty - 1;
      if(newQty < 1){
        newQty = 1;
      }
      return newQty;
    })
  }

  // Handler function for adding the product to the cart
  const addToCartHandler = (product) => {
    // Calculating the total price for the selected quantity of the product
    let totalPrice = qty * product.price;
    // Creating a temporary object for the product with additional data for the cart
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice
    }
    // Dispatching an action to add the product to the cart
    dispatch(addToCart(tempProduct));
    // Hiding the modal and navigating to the cart page
    dispatch(setIsModalVisible(false));
    navigate('/cart');
  };

  // Handler function for closing the modal if the user clicks outside of it
  const modalOverlayHandler = (e) => {
    if(e.target.classList.contains('overlay-bg')){
      dispatch(setIsModalVisible(false));
    }
  }

  // Rendering the modal with the product details and quantity selector

  return (
    <div className='overlay-bg' onClick = {modalOverlayHandler}>
      <div className = "product-details-modal bg-white">
        <button type = "button" className='modal-close-btn flex flex-center fs-14' onClick={() => dispatch(setIsModalVisible(false))}>
          <i className = "fas fa-times"></i>
        </button>
        <div className = "details-content grid">
          {/* details left */}
          <div className = "details-right">
            <div className = "details-img">
              <img src = {product.images[0]} alt = {product.title} />
            </div>
          </div>
          {/* detials right */}
          <div className='details-left'>
            <div className = "details-info">
              <h3 className = "title text-regal-blue fs-22 fw-5">{product.title}</h3>
              <p className='description text-pine-green'>{product.description}</p>
              <div className='price fw-7 fs-24'>Price: {formatPrice(product.price)}</div>
              <div className = "qty flex">
                <span className = "text-light-blue qty-text">Qty: </span>
                <div className = "qty-change flex">
                  <button type = "button" className='qty-dec fs-14' onClick={() => decreaseQty()}>
                    <i className = "fas fa-minus text-light-blue"></i>
                  </button>
                  <span className = "qty-value flex flex-center">{qty}</span>
                  <button type = "button" className='qty-inc fs-14 text-light-blue' onClick={() => increaseQty()}>
                    <i className = "fas fa-plus"></i>
                  </button>
                </div>
              </div>
              <button type = "button" className='btn-primary add-to-cart-btn' onClick={() => addToCartHandler(product)}>
                  <span className = "btn-icon">
                    <i className='fas fa-cart-shopping'></i>
                  </span>
                  <span className = 'btn-text'>Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct