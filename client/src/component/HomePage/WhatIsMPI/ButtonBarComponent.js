import React, { Component } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import { agentService } from "../../../services/AgentService";
import { ReadyCalendar } from "./ReadyCalendarComponent";

export class ButtonBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: this.props.agent,
      paidVideo: this.props.vids,
      paidDeposit: this.props.deposit,
    };
  }

  async componentDidMount() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
    console.log(this.props.vids);
  }

  render() {
    const vidWall = () => {
      if (this.props.vids === true) {
        return "/videoseries";
      } else {
        return "/videoseries";
      }
    };
    return (
      <div>
        <Container fluid style={{ flexDirection: "row" }}>
          <Row
            className="justify-content-md-center"
            style={{ marginBottom: "25px", marginTop: `7%` }}
          >
            <Col xs={12} md={6}>
              <ReadyCalendar
                agent={this.props.agent}
                deposit={this.props.deposit}
              />
            </Col>
            <Col xs={12} md={6}>
              <Button className="whatIsMPIButton" href={vidWall()}>
                <h2>LEARN MORE</h2>
              </Button>{" "}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
