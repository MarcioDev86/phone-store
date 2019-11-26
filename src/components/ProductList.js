import React, { Fragment } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context/context';

export default function ProductList() {

    return (
        // <Product />
        <Fragment>
            <div className="py-5">
                <div className="container">
                    <Title name="our" title="products" />

                    <div className="row">
                        <ProductConsumer>
                            {(value) => {
                                return value.products.map( product => {
                                    return <Product key={product.id} product={product} />
                                })
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
