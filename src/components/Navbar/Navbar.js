import React, { useState, useEffect} from 'react';
import "./Navbar.scss";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../store/categorySlice';
import { getCartTotal } from '../../store/cartSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  // Selecting data from the category and cart slices of the Redux store
  const {data: categories} = useSelector((state) => state.category);
  const {totalItems} = useSelector((state => state.cart));

  // Using state to control whether the sidebar is open or closed
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Fetching categories and cart total on component mount
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(getCartTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Rendering the navbar
  return (
    <nav className = "navbar">
      <div className='navbar-content'>
        <div className = "container">
          <div className = "navbar-top flex flex-between">

              {/* Link to homepage */}
              <Link to = "/" className = "navbar-brand">
                <span className = "text-regal-blue">go</span><span className='text-gold'>Cart.</span>
              </Link>

              {/* Search form */}
              <form className = "navbar-search flex">
                <input type = "text" placeholder='Search here ...' />
                <button type = "submit" className = "navbar-search-btn">
                  <i className = "fas fa-search"></i>
                </button>
              </form>

              {/* Cart button */}
              <div className = "navbar-btns">
                <Link to = "/cart" className="add-to-cart-btn flex">
                  <span className = "btn-ico">
                    <i className = "fas fa-shopping-cart"></i>
                  </span>
                  <div className='btn-txt fw-5'>Cart
                    <span className='cart-count-value'>{totalItems}</span>
                  </div>
                </Link>
              </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className='navbar-bottom bg-regal-blue'>
          <div className='container flex flex-between'>
            {/* Navigation links */}
            <ul className = {`nav-links flex ${isSidebarOpen ? 'show-nav-links' : ""}`}>
              <button type = "button" className='navbar-hide-btn text-white' onClick={() => setIsSidebarOpen(false)}>
                <i className='fas fa-times'></i>
              </button>
              {
                categories.map(category => (
                  <li key = {category.id}><Link to = {`/category/${category.id}`} className = "nav-link text-white" onClick={() => setIsSidebarOpen(false)}>{category.name}</Link></li>
                ))
              }
            </ul>

            {/* Button to open sidebar */}
            <button type = "button" className='navbar-show-btn text-gold' onClick={() => setIsSidebarOpen(true)}>
              <i className = "fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
