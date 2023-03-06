// Importing necessary packages and components
import React, {useEffect} from 'react';
import ProductList from '../../components/ProductList/ProductList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsByCategory } from '../../store/categorySlice';
import { useParams, Link } from 'react-router-dom';
import "./CategoryPage.scss"; // Importing styles

const CategoryPage = () => {
    const dispatch = useDispatch();
    const {id} = useParams(); // Getting the category id from the URL
    const {catProductSingle: products, catProductSingleStatus: status} = useSelector((state) => state.category); // Getting the products and their status from the Redux store

    useEffect(() => {
      dispatch(fetchProductsByCategory(id, 'single')); // Dispatching an action to fetch products by category
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    // Rendering the Category page with Breadcrumbs and ProductList components
    return (
      <div className = "category-page">
        <div className = "container">
          <div className = "breadcrumb">
            <ul className = "breadcrumb-items flex">
              <li className = "breadcrumb-item">
                <Link to = "/">
                  <i className = "fas fa-home"></i>
                  <span className = "breadcrumb-separator">
                    <i className = "fas fa-chevron-right"></i>
                  </span>
                </Link>
              </li>
              <li>
                Category
                <span className = "breadcrumb-separator">
                  <i className = "fas fa-chevron-right"></i>
                </span>
              </li>
              <li>
                { products[0] && products[0].category.name} {/* Displaying the name of the category */}
              </li>
            </ul>
          </div>
        </div>
        <ProductList products = {products} status = {status} /> {/* Passing the products and their status as props to the ProductList component */}
      </div>
    )
}

export default CategoryPage; // Exporting 
