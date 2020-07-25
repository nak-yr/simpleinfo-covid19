import React from "react";
import PropTypes from "prop-types";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";

class Charts extends React.Component {
  render() {
    const renderLineChart = (
      <div style={{ height: "50vh", width: "80%", margin: "auto" }}>
        <ResponsiveContainer>
          <LineChart data={this.props.data}>
            <Line type="monotone" dataKey="adpatients" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
    console.log(this.props.data);
    return renderLineChart;
  }
}

// propsのタイプを検証
Charts.propTypes = {
  data: PropTypes.array,
};

export default Charts;
