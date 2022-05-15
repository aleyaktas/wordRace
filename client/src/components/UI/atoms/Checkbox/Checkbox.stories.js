import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const defaultCheckbox = Template.bind({})
defaultCheckbox.args = {
  value:"Default checkbox",
  checboxColor: "black"
}


