import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './Statistics.styled';
import Item from './Item';

const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <h2>{title}</h2>}

      <ul>
        <Item stats={stats}></Item>
      </ul>
    </Container>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
