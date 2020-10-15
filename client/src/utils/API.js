import axios from "axios";

export default {
  // Gets the user data
  getUserData: function(id) {
    return axios.get('/api/savedfavs', {
      params: {
        userID: id
      }
    })
  },
  // Deletes the book with the given id
  deleteUserData: function(uid, fid) {
    return axios.delete("/api/removedfavs", {
      params: {
        userID: uid,
        favID: fid
      }
    });
  }
};
