import React from "react";
import { Image } from "react-bootstrap";
import ResumeImage from '../components/AboutMe/Resume.jpg';
import GoogleImage from '../components/AboutMe/GoogleSeattle.jpg';
import LondonImage from '../components/AboutMe/London.jpg';

export default class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <Image src={ ResumeImage } responsive />
        <Image src={ GoogleImage } responsive />
        <Image src={ LondonImage } responsive />
      </div>
    );
  }
}
