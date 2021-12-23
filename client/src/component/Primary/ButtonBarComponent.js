import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { agentService } from "../../services/AgentService";

export class ButtonBar extends Component {
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
      <div>
        <Container fluid style={{ flexDirection: "row" }}>
          <Row
            className="justify-content-md-center"
            style={{ marginBottom: "25px", marginTop: "25px" }}
          >
              <Col sm={2}></Col>
            <Col sm={3}>
              <Button
                style={{
                  // backgroundColor: `${this.props.agent.secondaryColor}`,
                  backgroundColor: `black`,
                  width: "100%",
                  border: "none",
                  boxShadow: "2px 2px rgba(0, 0, 0, 0.5)",
                  color: `${this.props.agent.textColor}`,
                  marginBottom: "5px"
                }}
                href="https://compoundinterest.com/main-page"
              >
                SECURE COMPOUND
                <br />
                INTEREST VIDEO SERIES
              </Button>{" "}
            </Col>
            <Col sm={2}></Col>
            <Col sm={3}>
              <Button
                style={{
                  // backgroundColor: `${this.props.agent.secondaryColor}`,
                  backgroundColor: `black`,
                  color: `${this.props.agent.textColor}`,
                  width: "100%",
                  border: "none",
                  boxShadow: "2px 2px rgba(0, 0, 0, 0.5)",
                  marginBottom: "5px"
                }}
                href="https://www.mympi.com/mpi/mpi-calculator"
              >
                MPI® RETIREMENT
                <br />
                CALCULATOR
              </Button>{" "}
            </Col>
            <Col sm={2}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
