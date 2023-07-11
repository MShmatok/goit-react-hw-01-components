import React from 'react';
import PropTypes from 'prop-types';

import Transaction from './Transaction';
import { TransactionHistoryStyle } from './TransactionHistory.styled';

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
        <Transaction items={items} />
      </tbody>
    </TransactionHistoryStyle>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
