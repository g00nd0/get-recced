const axios = require("axios").default;

const insertQuery = "name=assault&country=singapore";

const url = "http://localhost:3000/bands/?" + insertQuery;
// const url2 = "http://localhost:3000/bands/3540322780/discography/";
const url2 = "http://localhost:3000/bands/" + bandId + "/discography/";

const displayDiscog = (bandId) => {
  const url = "http://localhost:3000/bands/" + bandId + "/discography/";
  axios
    .get(url)
    .then(function (response) {
      console.log(response.data.data.discography);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};

const getBand = (bandId) => {
  const url = "http://localhost:3000/bands/" + bandId;
  axios
    .get(url)
    .then(function (response) {
      // handle success
      // console.log(response);
      console.log(response.data.data.band);
      displayDiscog(3540322780);
      // console.log(response.data.data.discography);
      // console.log(response.data.value.joke);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};

getBand(3540322780);
