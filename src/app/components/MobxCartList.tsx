// CartList.tsx

import React from 'react';
import { CartItem } from '../models/CartItem';
// TODO: import CartItem component
// default imports are alias
import MobxCartItem from './MobxCartItem';
import { inject, observer } from 'mobx-react';
import { CartState } from '../state/CartState';

interface CartListProps {
    cart?: CartState
}

interface CartListState {
}

@inject('cart')
@observer
class MobxCartList extends React.Component<CartListProps> {
    constructor(props: CartListProps) {
        super(props);
    }
 

    render() {
        console.log('CartList render');

        
        const items = this.props.cart!.items;

        return (
            <div>
                <h2> Cart List </h2>
                {/* todo */}
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Ops</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            items!.map ( (item, index) => (
                                <MobxCartItem item={item} 
                                              key={item.id}
                                             
                                          
                                              />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MobxCartList;