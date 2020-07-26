import React from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../App.css";

class Charts extends React.Component {
  render() {
    // グラフのTooltipに表示する内容をカスタマイズする関数
    function CustomTooltip({ payload, label, active }) {
      if (active) {
        return (
          <div className="custom-tooltip">
            <p className="label">
              <b>{label}</b>
            </p>
            <p className="intro">
              新規感染者 <b>{payload[0].value}</b> 人
            </p>
          </div>
        );
      }
      return null;
    }

    const renderLineChart = (
      <div style={{ height: "50vh", width: "80%", margin: "auto" }}>
        <ResponsiveContainer>
          <BarChart data={this.props.data}>
            <Bar type="monotone" dataKey="adpatients" fill="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
    return renderLineChart;
  }
}

// propsのタイプを検証
Charts.propTypes = {
  data: PropTypes.array,
};

export default Charts;
