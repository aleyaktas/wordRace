import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import store from "../../../../store";

import CreateRoomModal from "./CreateRoomModal";

export default {
  title: "Molecules/CreateRoomModal",
  component: CreateRoomModal,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

const Template = (args) => <CreateRoomModal {...args} />;
export const DefaultCreateRoomModal = Template.bind({});
DefaultCreateRoomModal.args = {
  isOpen: true,
};
