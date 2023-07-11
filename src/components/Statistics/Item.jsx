import React from 'react';
import PropTypes from 'prop-types';
import { ItemLi, Label, Percentage } from './Item.styled';

const Item = ({ stats }) => {
  return stats.map(stat => {
    return (
      <ItemLi key={stat.id} color={`${getRandomHexColor()}`}>
        <Label>{stat.label}</Label>
        <Percentage>{`${stat.percentage}%`}</Percentage>
      </ItemLi>
    );
  });
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
export default Item;

Item.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

