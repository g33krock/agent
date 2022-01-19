import React, { Component } from "react";
// import { Container, Row, Col, Image } from "react-bootstrap";
import { agentService } from "../../services/AgentService";
// import { ButtonBar } from "./ButtonBarComponent";

export class Webinar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: this.props.agent,
    };
  }

  async componentDidMount() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
  }

  render() {
    return (
      <div style={{height: "80vh", width: "100vw", margin:"0px", padding:"0px", overflow: "hidden"}}>
        <iframe
          src="https://compoundinterest.clickfunnels.com/auto-webinar-registrationhpa135ci"
          title="Webinar Registration"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    );
  }
}
