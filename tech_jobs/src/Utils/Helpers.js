import axios from 'axios';


export default {
  console.log("backend");

  searchAuthenticJobs: function(data){
   return axios.post("http://localhost:3000/techjobs", data)
  }

}
