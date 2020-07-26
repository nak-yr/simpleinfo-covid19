import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import "../App.css";

class Comparison extends React.Component {
  titleDetector(type) {
    switch (type) {
      case "adpatients":
        return "新規感染者数";
      case "ndeaths":
        return "死亡者数";
      default:
        return null;
    }
  }
  // latestとbeforeの差diffから、表示するメッセージを選択する関数
  messageDetector(diff) {
    if (diff > 0) {
      var diffMessage = diff + "人増加";
    } else if (diff < 0) {
      diffMessage = Math.abs(diff) + "人減少";
    } else {
      diffMessage = "変化なし";
    }
    return diffMessage;
  }

  render() {
    if (this.props.latest !== null && this.props.before !== null) {
      const diff = this.props.latest.adpatients - this.props.before.adpatients;
      return (
        <Card>
          <Card.Header>{this.titleDetector(this.props.type)}</Card.Header>
          <Card.Body>
            <Card.Title>
              {this.props.before.date}と比べて<b>{this.messageDetector(diff)}</b>
            </Card.Title>
            <Card.Text>
              {this.props.before.date} : {this.props.before.adpatients}人 <br />
              {this.props.latest.date} : {this.props.latest.adpatients}人
            </Card.Text>
          </Card.Body>
        </Card>
      );
    } else {
      return (
        <Card>
          <Card.Header>比較</Card.Header>
          <Card.Body>
            <Card.Title>情報がありません</Card.Title>
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
