// ProductList.tsx

import React from 'react';
import { CartItem } from '../models/CartItem';

import { inject, observer } from 'mobx-react';
import { ProductState } from '../state/ProductState';
import { CartState } from '../state/CartState';
import { Product } from '../models/Product';

interface ProductListProps {
    product?: ProductState,
    cart?: CartState
}

interface ProductListState {
}

@inject('cart', 'product')
@observer
class ProductList extends React.Component<ProductListProps, ProductListState> {
    constructor(props: ProductListProps) {
        super(props);
    }
 
    componentDidMount() {
        this.props.product!.fetchProducts();
    }

    render() {
        console.log('Product List render');

        
        const products = this.props.product!.products;

        return (
            <div>
                <h2> Product List </h2>
                {/* todo */}
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                         <th>Ops</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            products!.map ( (product, index) => (
                                <tr key={product.id} >
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <button onClick={() => this.props.cart!.addProductToCart(product) }>
                                            +Cart
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductList;