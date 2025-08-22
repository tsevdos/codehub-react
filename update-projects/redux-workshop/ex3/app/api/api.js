import axios from "axios";

export const fetchCourses = () => axios.get("https://api.myjson.com/bins/kbu1a")
  .then(({ data }) => data);
