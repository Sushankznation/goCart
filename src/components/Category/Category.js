import React from 'react'; // Import the React library

import { STATUS } from "../../utils/status";
import "./Category.scss";
import {Link} from "react-router-dom"; 
import Error from '../Error/Error'; 
import Loader from '../Loader/Loader';

// Define a functional component named Category that takes two props: categories and status
const Category = ({categories, status}) => {
    // If the status prop is ERROR, return an Error component
    if(status === STATUS.ERROR) return (<Error />);
    // If the status prop is LOADING, return a Loader component
    if(status === STATUS.LOADING) return (<Loader />);

    // If the status is not ERROR or LOADING, render the category section
    return (
        <section className = "categories py-5 bg-ghost-white" id = "categories">
            <div className = "container">
                <div className = "categories-content">
                    <div className='section-title'>
                        <h3 className = "text-uppercase fw-7 text-regal-blue ls-1">Category</h3>
                    </div>
                    <div className = "category-items grid">
                        {/* Map over the first 5 categories in the categories prop */}
                        {categories.slice(0, 5).map(category => (
                            // For each category, create a Link to the category page
                            <Link to = {`category/${category.id}`} key = {category.id}>
                                <div className = "category-item" >
                                    {/* Display the category image */}
                                    <div className='category-item-img'>
                                        <img src = {category.image} alt = "" />
                                    </div>
                                    {/* Display the category name */}
                                    <div className = "category-item-name text-center">
                                        <h6 className='fs-20'>{category.name}</h6>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Category; // Export the Category component 
