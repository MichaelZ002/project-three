import axios from "axios";

export default {
  // Gets the user data
  getUserData: function (id) {
    return axios.get("/api/savedfavs", {
      params: {
        userID: id,
      },
    });
  },
  // Deletes the favorite with the given id and user id
  deleteUserData: function (uid, fid) {
    return axios.delete("/api/removedfavs", {
      params: {
        userID: uid,
        favID: fid,
      },
    });
  },

  updateProject: function (todoItem) {
    // return console.log("update dbAPI")
    return axios.post("/api/projects", {
      params: {
        notes: todoItem,
      },
    });
  },
};
