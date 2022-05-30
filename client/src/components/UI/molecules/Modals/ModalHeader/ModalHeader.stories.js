import React from 'react';
import ModalHeader from './ModalHeader';

export default {
  title: 'Molecules/ModalHeader',
  component: ModalHeader,
};

const Template = (args) => <ModalHeader {...args} />;

export const DefaultModalHeader = Template.bind({});
DefaultModalHeader.args = {
  text:"Header Text",
};

