import { donHttps } from "config";
import axios from "axios";
export const userLogin = (formBody) =>  (dispatch) => {
  donHttps
    .post('http://127.0.0.1:8000/accounts/login/', formBody)
    .then(({ data }) => {
   console.log(data)
    })
    .catch((err) => {
      console.log(err);
    });
};