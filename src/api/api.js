import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    "Accept-Version": "v1",
    Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
  },
});

export default instance;
