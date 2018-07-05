import React from "react";
import { PageHeader } from "react-bootstrap";

export default class Header extends React.Component {
  render() {
    const headerStyle = {
      paddingBottom: "0px",
      borderBottom: "0px",
      backgroundColor: "rgb(255, 255, 0)",
      padding: "20px",
      margin: "0px",
      fontFamily: "comic sans ms"
    };

    return (
      < PageHeader style={headerStyle}>
        SnapHireMe
      </ PageHeader >
    );
  }
}
