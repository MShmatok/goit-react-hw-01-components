import React from 'react';
import PropTypes from 'prop-types';

import { Container, ItemLi, Label, Percentage } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(stat => (
          <ItemLi key={stat.id}>
            <Label>{stat.label}</Label>
            <Percentage>{`${stat.percentage}%`}</Percentage>
          </ItemLi>
        ))}
      </ul>
    </Container>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
