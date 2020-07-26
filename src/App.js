import React from "react";
import axios from "axios";
import "./App.css";
import DataOperations from "./components/DataOperations";
import NavBar from "./components/NavBar";

// コロナ類型感染者の日別データソース
const urlWholeJP = "http://localhost:3000/data/covid19japan-npatients.json";
//const urlWholeJP = "https://data.corona.go.jp/converted-json/covid19japan-npatients.json";
const urlDeath = "https://data.corona.go.jp/converted-json/covid19japan-ndeaths.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      dataDeath: [],
    };
  }

  // マウント時にgetCovidData()を実行する関数
  componentDidMount() {
    this.getCovidData();
    this.getDeathData();
  }

  // axiosでhttp通信をし、感染者数データをstateに格納する関数
  // この中身を直接componentDidMount()内に書いてもいいのだが、非同期で行われるaxios.get()の処理を待つために
  // async/awaitを導入したかったので別関数とした
  // await axios...としているため、axiosでのhttp通信が終わった段階でsetStateされるはず
  async getCovidData() {
    await axios
      .get(urlWholeJP)
      .then((response) => {
        // 通信が成功していればsetStateする
        this.setState({
          data: response.data,
        });
      })
      .catch(() => {
        // 通信が失敗していればエラーメッセージを表示する
        console.log("通信に失敗しました。");
      });
  }

  async getDeathData() {
    await axios
      .get(urlDeath)
      .then((response) => {
        // 通信が成功していればsetStateする
        this.setState({
          dataDeath: response.data,
        });
      })
      .catch(() => {
        // 通信が失敗していればエラーメッセージを表示する
        console.log("通信に失敗しました。");
      });
  }

  render() {
    // DataOperationコンポーネントにpropsをdataとして通信結果を渡す
    return (
      <React.Fragment>
        <NavBar />
        <DataOperations data={this.state.data} dataDeath={this.state.dataDeath} />
      </React.Fragment>
    );
  }
}

export default App;
