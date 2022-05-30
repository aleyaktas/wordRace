import React from 'react';
import Text from '../../atoms/Text/Text';
import FriendItem from './FriendItem';

export default {
  title: 'Molecules/FriendItem',
  component: FriendItem,
};

const Template = (args) => <FriendItem {...args} />;

export const DefaultFriendItem = Template.bind({});
DefaultFriendItem.args = {
  index:1,
  username:"username",
  customComponent: <><Text font="InterRegular" text='custom component' /></>
};

