import React from "react";
import PropTypes from "prop-types";
import { Alert, Card, Spinner } from "react-bootstrap";
import Comparison from "./Comparison";
import Charts from "./Charts";
import "../App.css";

// 日本全体の日別感染者数を格納するArray
var nPatientsDaily = [];
// 公表されている最新日の日本全体での感染者数を格納するArray
var nPatientsLatest = [];
// 公表されている一日前の日本全体での感染者数を格納するArray
var nPatientsBefore = [];

// 日本全体のコロナ死亡者数を格納するArray
var nDeathDaily = [];
// 公表されている最新日の日本全体でのコロナ死亡者数を格納するArray
var nDeathLatest = [];
// 公表されている一日前の日本全体でのコロナ死亡者数を格納するArray
var nDeathBefore = [];

class DataOperations extends React.Component {
  render() {
    // Appコンポーネントからのpropsで内閣官房のオープンデータを受け取り、格納
    nPatientsDaily = this.props.adpatients;
    // 最新日のデータはpropsの最後の要素なのでsliceで取り出す
    nPatientsLatest = nPatientsDaily.slice(-1)[0];
    nPatientsBefore = nPatientsDaily.slice(-2)[0];

    // Appコンポーネントからのpropsでコロナ死亡者数のオープンデータを受け取り、格納
    nDeathDaily = this.props.ndeaths;
    nDeathLatest = nDeathDaily.slice(-1)[0];
    nDeathBefore = nDeathDaily.slice(-2)[0];

    // axiosでのhttp通信は非同期の為、処理が未完了(=配列が空)の間は「Loading...」と表示
    // こうしておかないと、格納前にnPatientsLatest.dateのように、子要素にアクセスしようとするためエラーを吐く
    if (nPatientsDaily.length === 0) {
      return (
        <h2>
          <Spinner animation="border" variant="secondary" />
          Loading...
        </h2>
      );
    }
    // 処理が完了した(=配列にデータが格納された)場合はその中身を表示
    else {
      return (
        <React.Fragment>
          <div className="todaysPatientsWrapper">
            <Alert variant="danger">
              <h2>
                {nPatientsLatest.date}の新規感染者数 : {nPatientsLatest.adpatients} 人
              </h2>
            </Alert>
          </div>
          <div className="someInfo">
            <Comparison type="adpatients" latest={nPatientsLatest} before={nPatientsBefore} />
            <Comparison type="ndeaths" latest={nDeathLatest} before={nDeathBefore} />
          </div>
          <Card className="cardParts">
            <Card.Header>グラフ</Card.Header>
            <Card.Body>
              <Charts adpatients={this.props.adpatients} ndeaths={this.props.ndeaths} />
            </Card.Body>
          </Card>
        </React.Fragment>
      );
    }
  }
}

// propsのタイプを検証
DataOperations.propTypes = {
  adpatients: PropTypes.array,
  ndeaths: PropTypes.array,
};

export default DataOperations;
