import React from "react";
import axios from "axios";
import "./App.css";
import DataOperations from "./components/DataOperations";
import NavBar from "./components/NavBar";

// コロナ類型感染者の日別データソース
const url = "https://data.corona.go.jp/converted-json/covid19japan-npatients.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getCovidData();
  }

  async getCovidData() {
    await axios
      .get(url)
      .then((response) => {
        // handle success
        this.setState({
          data: response.data,
        });
      })
      .catch(() => {
        console.log("通信に失敗しました。");
      });
  }

  render() {
    console.log(this.state.data);
    return (
      <React.Fragment>
        <NavBar />
        <DataOperations data={this.state.data} />
      </React.Fragment>
    );
  }
}

export default App;
