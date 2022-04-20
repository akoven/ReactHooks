import React from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import {useState} from 'react';
import './ProductView.css'

function ProductView({ products }) {

    // TODO: Replace with state variable
    const [sideOpen, setSideOpen] = useState(true);
    const [displayDetails, setDisplayDetails] = useState(true);

    return (
        <div className="product-view">
            <div className="product-main-area">
                <h1>Products</h1>
                <div className="product-list">
                    {products.map(item =>
                        <ProductListItem
                            key={item.id}
                            product={item}
                            onClick={() => setDisplayDetails(!displayDetails)}
                            // {displayDetails ? item.details : null}
                        />
                    )}
                </div>
            </div>
            <div className="product-side-panel">
                <div className="product-side-panel-toggle-wrapper">
                    <div className="product-side-panel-toggle"
                         onClick={() => setSideOpen(!sideOpen)}>
                        {sideOpen ? '>' : '<'}
                    </div>
                </div>
                <ProductDetails visible={sideOpen} />
            </div>
        </div>
    );
}

export default ProductView;
