import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://gradebook-project.herokuapp.com/api/",
});

export default apiClient;
