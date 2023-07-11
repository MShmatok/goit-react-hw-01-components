import React from 'react';
import PropTypes from 'prop-types';

import { ContainerItem } from './FriendListItem.styled';

const FriendListItem = ({ friends }) => {
  return friends.map(friend => {
    return (
      <ContainerItem key={friend.id} $isonline={friend.isOnline}>
        <span></span>
        <img src={friend.avatar} alt="User avatar" width="60" height="60" />
        <p>{friend.name}</p>
      </ContainerItem>
    );
  });
};

export default FriendListItem;

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
