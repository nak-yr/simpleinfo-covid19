import React from "react";
import axios from "axios";

function dataOperations() {
  const url = "https://data.corona.go.jp/converted-json/covid19japan-npatients.json";

  axios.get(url).then(function (response) {
    // handle success
    console.log(response.data);
  });

  return <h2>hogehoge</h2>;
}

export default dataOperations;
