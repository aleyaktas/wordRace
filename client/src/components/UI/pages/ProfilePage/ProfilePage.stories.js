import React from "react";
import ProfilePage from "./ProfilePage";

export default {
  title: "Pages/ProfilePage",
  component: ProfilePage,
};

const Template = (args) => <ProfilePage {...args} />;

export const DefaultProfilePage = Template.bind({});
DefaultProfilePage.args = {
  username: "username",
  email: "email@gmail.com",
};
