import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.table`
    width: 100%;
    border-collapse: collapse;

    td, th {
        border:1px solid #DDD;
        padding:8px;
        text-align: left;
    }

    tr:nth-child(even) {
        background: #DDD;
    }
`;

const CartTable = ({ cart }) => (
    <Wrapper>
        <thead>
            <tr>
                <th>Item Name</th>
                <th>Item Price</th>
                <th>Item quantity</th>
            </tr>
        </thead>
        <tbody>
            {cart.items.map(item => (
                <tr key={item.productId}>
                    <td>product name??</td>
                    <td>product availability</td>
                    <td>{item.quantity}</td>
                </tr>
            ))}
        </tbody>
    </Wrapper>
);

CartTable.propTypes = {
    cart: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape({
            productId: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
        })).isRequired,
    }).isRequired,
};

export default CartTable;