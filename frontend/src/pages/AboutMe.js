import React from "react";
import { Image } from "react-bootstrap";

export default class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <Image src="src/components/AboutMe/Resume.jpg" responsive />
        <Image src="src/components/AboutMe/GoogleSeattle.jpg" responsive />
        <Image src="src/components/AboutMe/London.jpg" responsive />
      </div>
    );
  }
}
