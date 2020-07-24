import React from "react";
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";
import "../App.css";

// 日本全体の日別感染者数を格納するArray
var nPatientsDaily = [];
// 公表されている最新日の日本全体での感染者数を格納するArray
var nPatientsToday = [];

class DataOperations extends React.Component {
  render() {
    // Appコンポーネントからのpropsで内閣官房のオープンデータを受け取り、格納
    nPatientsDaily = this.props.data;
    // 最新日のデータはpropsの最後の要素なのでsliceで取り出す
    nPatientsToday = nPatientsDaily.slice(-1)[0];

    // axiosでのhttp通信は非同期の為、処理が未完了(=配列が空)の間は「Loading...」と表示
    // こうしておかないと、格納前にnPatientsToday.dateのように、子要素にアクセスしようとするためエラーを吐く
    if (nPatientsDaily.length === 0) {
      return <h2>Loading...</h2>;
    }
    // 処理が完了した(=配列にデータが格納された)場合はその中身を表示
    else {
      return (
        <React.Fragment>
          <div className="todaysPatientsWrapper">
            <Alert variant="danger">
              <h2>
                {nPatientsToday.date}の新規感染者数 : {nPatientsToday.adpatients} 人
              </h2>
            </Alert>
          </div>
          <ul>
            {nPatientsDaily.map((nPatient, index) => (
              <li key={index}>
                {nPatient.date} : 新規感染者数 {nPatient.adpatients}, 累計感染者数 {nPatient.npatients}
              </li>
            ))}
          </ul>
        </React.Fragment>
      );
    }
  }
}

// propsのタイプを検証
DataOperations.propTypes = {
  data: PropTypes.array,
};

export default DataOperations;
