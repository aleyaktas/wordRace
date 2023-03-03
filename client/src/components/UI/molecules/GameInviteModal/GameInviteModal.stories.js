import React from "react";
import { Provider } from "react-redux";
import store from "../../../../store";
import GameInviteModal from "./GameInviteModal";

export default {
  title: "Molecules/GameInviteModal",
  component: GameInviteModal,
};

const Template = (args) => (
  <Provider store={store}>
    <GameInviteModal {...args} />
  </Provider>
);

export const DefaultGameInviteModal = Template.bind({});
DefaultGameInviteModal.args = {
  isOpen: true,
};
