import React, { Component } from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import { agentService } from "../../../services/AgentService";
import { BottomCalendar } from "./BottomCalendarComponent";

export class Bottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: [],
    };
  }

  async componentDidMount() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
  }

  async changeState() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
  }

  render() {
    return (
      <div>
        
          <Row
            className="justify-content-md-center"
            style={{ marginBottom: "5%", marginTop: "5%", backgroundColor: this.props.agent.primaryColor, paddingTop: '1%', paddingBottom: '1%' }}
          >
            <Col />
            <Col sm={3}>
              <Button
                style={{
                  // backgroundColor: `${this.props.agent.primaryColor}`,
                  backgroundColor: `black`,
                  width: "100%",
                  border: "none",
                  boxShadow: "2px 2px rgba(0, 0, 0, 0.5)",
                  color: `white`,
                  marginBottom: "5px",
                  textShadow: "1px 1px black"
                }}
                href="#webinarTag"
              >
                RESERVE
                <br />
                YOUR SPOT
              </Button>{" "}
            </Col>
            <Col />
            <Col sm={3}>
              <Button
                style={{
                  // backgroundColor: `${this.props.agent.primaryColor}`,
                  backgroundColor: `black`,
                  color: `white`,
                  width: "100%",
                  border: "none",
                  boxShadow: "2px 2px rgba(0, 0, 0, 0.5)",
                  marginBottom: "5px",
                  textShadow: "1px 1px black"
                }}
                href="/videoseries"
              >
                MPI® RETIREMENT
                <br />
                CALCULATOR
              </Button>{" "}
            </Col>
            <Col />
            <Col sm={3}>
              {this.state.agent &&
                this.state.agent.map((ag) => <BottomCalendar agent={ag}/>)}
            </Col>
            <Col />
          </Row>
          {this.state.agent &&
            this.state.agent.map((ag) => (
              <>
                <Row style={{ paddingBottom: "5%" }}>
                  <Image
                    src={ag.altIcon ? ag.altIcon : ag.icon}
                    style={{
                      maxHeight: "100px",
                      width: "auto",
                      margin: "auto",
                    }}
                  />
                </Row>
                <Row
                  style={{
                    minHeight: "10vh",
                    backgroundColor: ag.primaryColor,
                  }}
                >
                  <Col>
                    <p
                      style={{
                        color: ag.textColor ? ag.textColor : "black",
                        marginTop: "1%",
                        marginBottom: "1%",
                      }}
                    >
                      {ag.address1}
                      <br />
                      {ag.city}, {ag.state}, {ag.zip}
                      <br />
                      {ag.email}
                      <br />
                      {ag.phone}
                    </p>
                  </Col>
                </Row>
              </>
            ))}
        
      </div>
    );
  }
}
