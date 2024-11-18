import axios from "axios";

const baseUrl = axios.create({
    // for example
  baseURL: 'https://jsonplaceholder.typicode.com/posts'
});

export default baseUrl;

