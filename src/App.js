import React from "react";
import axios from "axios";
import "./App.css";
import DataOperations from "./components/DataOperations";
import NavBar from "./components/NavBar";

// コロナ類型感染者の日別データソース
//const url = "http://localhost:3000/data/covid19japan-npatients.json";
const url = "https://data.corona.go.jp/converted-json/covid19japan-npatients.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  // マウント時にgetCovidData()を実行する関数
  componentDidMount() {
    this.getCovidData();
  }

  // axiosでhttp通信をし、感染者数データをstateに格納する関数
  // この中身を直接componentDidMount()内に書いてもいいのだが、非同期で行われるaxios.get()の処理を待つために
  // async/awaitを導入したかったので別関数とした
  // await axios...としているため、axiosでのhttp通信が終わった段階でsetStateされるはず
  async getCovidData() {
    await axios
      .get(url)
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

  render() {
    // DataOperationコンポーネントにpropsをdataとして通信結果を渡す
    return (
      <React.Fragment>
        <NavBar />
        <DataOperations data={this.state.data} />
      </React.Fragment>
    );
  }
}

export default App;
