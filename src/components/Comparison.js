import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import "../App.css";

// 主に最新とその前日の数値の比較を行うclass
class Comparison extends React.Component {
  // propsのtype内の文字列によって、カードヘッダの文字列と人数の差を算出しオブジェクトとして返す
  titleAndDiffDetector(type) {
    switch (type) {
      case "adpatients":
        return {
          type: "新規陽性者",
          diff: this.props.latest.adpatients - this.props.before.adpatients,
          latest: this.props.latest.adpatients,
          before: this.props.before.adpatients,
        };
      case "ndeaths":
        return {
          type: "累計死者",
          diff: this.props.latest.ndeaths - this.props.before.ndeaths,
          latest: this.props.latest.ndeaths,
          before: this.props.before.ndeaths,
        };
      default:
        return null;
    }
  }
  // latestとbeforeの差diffから、表示するメッセージを選択する関数
  messageDetector(diff) {
    if (diff > 0) {
      var diffMessage = <b className="text-danger"> +{diff} 人 </b>;
    } else if (diff < 0) {
      diffMessage = <b className="text-success">-{Math.abs(diff)} 人 </b>;
    } else {
      diffMessage = "変化なし";
    }
    return diffMessage;
  }

  render() {
    if (this.props.latest !== null && this.props.before !== null) {
      /*
      diffInfoには以下の情報が格納されている
      diffInfo = {
        type：この数値のタイプ(adpatients, ndeathsなど)
        diff：最新とその一日前との数値の差
        latest：最新日の数値
        before：最新の一日前の数値
      }
       */
      const diffInfo = this.titleAndDiffDetector(this.props.type);
      return (
        <Card className="someInfoCard">
          <center>
            <Card.Header>{diffInfo.type}</Card.Header>
          </center>
          <center>
            <Card.Body>
              <Card.Title>
                前日比
                <br />
                {this.messageDetector(diffInfo.diff)}
              </Card.Title>
              {/*<Card.Text>
              {this.props.before.date.split("-").join("/")} : {diffInfo.before}人 <br />
              {this.props.latest.date.split("-").join("/")} : {diffInfo.latest}人
            </Card.Text>
            */}
            </Card.Body>
          </center>
        </Card>
      );
    } else {
      return (
        <Card className="someInfoCard">
          <Card.Header>比較</Card.Header>
          <Card.Body>
            <Card.Title>情報が取得できませんでした</Card.Title>
          </Card.Body>
        </Card>
      );
    }
  }
}

Comparison.defaultProps = {
  latest: null,
  before: null,
};

// propsのタイプを検証
Comparison.propTypes = {
  type: PropTypes.string,
  latest: PropTypes.object,
  before: PropTypes.object,
};

export default Comparison;
