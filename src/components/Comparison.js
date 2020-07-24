import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import "../App.css";

class Comparison extends React.Component {
  render() {
    if (this.props.latest !== null && this.props.before !== null) {
      const diff = this.props.latest.adpatients - this.props.before.adpatients;
      return (
        <Card>
          <Card.Header>比較</Card.Header>
          <Card.Body>
            <Card.Title>
              {this.props.before.date}と比べて<b>{diff}</b>人増加
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
  latest: PropTypes.object,
  before: PropTypes.object,
};

export default Comparison;
