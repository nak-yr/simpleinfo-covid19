import React from "react";
import PropTypes from "prop-types";

class DataOperations extends React.Component {
  render() {
    const nPatientsDaily = this.props.data;
    return (
      <React.Fragment>
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

// propsのタイプを検証
DataOperations.propTypes = {
  data: PropTypes.array,
};

export default DataOperations;
