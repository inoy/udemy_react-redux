import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    // eslint-disable-next-line no-undef
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY}`,
  },
});
