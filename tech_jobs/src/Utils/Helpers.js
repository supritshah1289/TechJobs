import axios from 'axios';


export default {

  searchAuthenticJobs: function(data){
    console.log("Backend helper function", data);
   return axios.post("http://localhost:3000/techjobs", data)
  }

}
