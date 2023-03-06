import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsModalVisible, setModalData } from '../../store/modalSlice';
import { formatPrice } from '../../utils/helpers';
import SingleProduct from '../SingleProduct/SingleProduct';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import {STATUS} from "../../utils/status";

const SingleCategory = ({products, status}) => {

    // Get the dispatch function from the Redux store
    const dispatch = useDispatch();

    // Get the isModalVisible state from the Redux store
    const {isModalVisible} = useSelector((state) => state.modal);

    // Handler function to show the modal with product details
    const viewModalHandler = (data) => {
        // Dispatch an action to set the modal data to be displayed
        dispatch(setModalData(data));

        // Dispatch an action to set the modal visibility to true
        dispatch(setIsModalVisible(true));
    }

    // Show an error message if the product fetch status is ERROR
    if(status === STATUS.ERROR) return (<Error />);

    // Show a loader if the product fetch status is LOADING
    if(status === STATUS.LOADING) return (<Loader />);

    // Render the product items in a container with a section title
    return (
        <section className='cat-single py-5 bg-ghost-white'>
            { isModalVisible && <SingleProduct />}

            <div className='container'>
                <div className='cat-single-content'>
                    <div className='section-title'>
                        <h3 className='text-uppercase fw-7 text-regal-blue ls-1'>{products[0].category.name}</h3>
                    </div>
                    <div className='product-items grid'>
                        {
                            products.map(product => (
                                <div className='product-item bg-white' key = {product.id} onClick = {() => viewModalHandler(product)}>
                                    <div className='product-item-img'>
                                        <img src = {product.images[0]} alt = "" />
                                        <div className = "product-item-cat text-white fs-13 text-uppercase bg-gold fw-6">{product.category.name}</div>
                                    </div>
                                    <div className='product-item-body'>
                                        <h6 className = "product-item-title text-pine-green fw-4 fs-15">{product.title}</h6>
                                        <div className = "product-item-price text-regal-blue fw-7 fs-18">{formatPrice(product.price)}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleCategory;
