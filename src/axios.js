import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://django-react-todo-v1.herokuapp.com/api/todo",
  timeout: 5000,
});

export default axiosInstance;
