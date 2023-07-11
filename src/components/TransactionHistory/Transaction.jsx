import React from 'react';
import PropTypes from 'prop-types';

import { TransactionStyle } from './Transaction.styled';

const Transaction = ({ items }) => {
  return items.map(trans => {
    return (
      <TransactionStyle key={trans.id}>
        <td>{trans.type}</td>
        <td>{Number(trans.amount)}</td>
        <td>{trans.currency}</td>
      </TransactionStyle>
    );
  });
};

export default Transaction;

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
