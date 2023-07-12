import React from 'react';
import PropTypes from 'prop-types';

import {
  TransactionHistoryStyle,
  TransactionStyle,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryStyle>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(trans => (
          <TransactionStyle key={trans.id}>
            <td>{trans.type}</td>
            <td>{Number(trans.amount)}</td>
            <td>{trans.currency}</td>
          </TransactionStyle>
        ))}
      </tbody>
    </TransactionHistoryStyle>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
