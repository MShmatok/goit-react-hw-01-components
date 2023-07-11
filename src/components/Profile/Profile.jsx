import React from 'react';
import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Wraper,
  WraperImg,
  Name,
  Tag,
  Location,
  WraperTags,
  Label,
  Quantity,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <Wraper>
        <WraperImg
          src={
            avatar
              ? avatar
              : 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png'
          }
          alt="User avatar"
        />
        <Name>{username}</Name>
        <Tag>{`@${tag}`}</Tag>
        <Location>{location}</Location>
      </Wraper>

      <WraperTags>
        <li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </WraperTags>
    </ProfileContainer>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
