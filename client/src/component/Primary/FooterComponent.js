import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
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
            <Row key={ag.toString()} style={{backgroundColor:"black", width: "100%", marginLeft: "auto", marginRight: "auto", color: "white"}}>
              <Col sm={2} />
              <Col sm={8}>
              <small>Copyright © 2021 MPI® UNLIMITED LLC. All Rights Reserved. This site is not part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook, TikTok or Pinterest in any way. Facebook is a trademark of FACEBOOK, Inc. This site is not part of the TikTok website or TikTok Company. This site is not part of the Pinterest website or Pinterest Company.</small>
              </Col>
              <Col sm={2} />
            </Row>
          ))}
      </>
    );
  }
}
