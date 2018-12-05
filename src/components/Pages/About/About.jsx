import React, { Component } from "react";
import Layout from "../../Layout/layout";
import "./About.css";

class About extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="about">
          <h1>
            Edit About component or pages/about.jsx to include your information.
          </h1>
        </div>
      </Layout>
    );
  }
}

export default About;
