import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID p_P6Pe3565XUsSv_MxW_9_Wvvv7lomwIQMdFQVYDfYk",
  },
});
