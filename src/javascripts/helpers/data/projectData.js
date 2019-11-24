import axios from 'axios';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/dinosaurs.json`).then((response) => {
    const demProjects = response.data;
    const projects = [];
    Object.keys(demProjects).forEach((fbId) => {
      demProjects[fbId].id = fbId;
    });
    resolve(projects);
  })
    .catch((error) => reject(error));
});
