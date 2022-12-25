import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showMessage = (msg, type) => {
  toast(msg, {
    position: "top-center",
    autoClose: 2000,
    newestOnTop: true,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    type,
    style: {
      fontSize: "1.8rem",
    },
  });
};
