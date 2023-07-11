import React from 'react';
import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';
import { Container } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <Container>
      <FriendListItem friends={friends}></FriendListItem>
    </Container>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
