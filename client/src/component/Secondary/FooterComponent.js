import React, { Component } from "react";
import { Col, Row, Image } from "react-bootstrap";
import { agentService } from "../../services/AgentService";

export class Footer extends Component {
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
      <>
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Row key={ag.toString()} style={{backgroundColor:"black", width: "101%", paddingTop: "1%", paddingBottom: "1%"}}>
              <Col style={{ color: `${ag.textColor}`, padding: "0px" }} >
                <strong>{ag.address1}</strong>
                <br />
                <strong>
                  {ag.city}, {ag.state}, {ag.zip}
                </strong>
                <br />
                <strong>{ag.phone}</strong>
              </Col>
              <Col style={{padding: "1%"}}><Image src={ag.icon} style={{maxHeight: "50px"}} /></Col>
            </Row>
          ))}
      </>
    );
  }
}
