import React from 'react';
import PropTypes from 'prop-types';

import { ContainerItem } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <ContainerItem $isonline={isOnline}>
    <span></span>
    <img src={avatar} alt="User avatar" width="60" height="60" />
    <p>{name}</p>
  </ContainerItem>
);

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
