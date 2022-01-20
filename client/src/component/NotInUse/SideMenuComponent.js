import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { agentService } from "../../services/AgentService";
import { Calendar } from "../CalendarComponent";

export class SideMenu extends Component {
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
    console.log(this.props.agent);
    console.log(ID);
  }

  render() {
    // const agency = "Not Your Mother's Insurance Agency";
    return (
        <div className="sticky2">
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Container fluid key={ag.toString()}>
              <Row
                className="justify-content-md-center"
                style={{ marginBottom: "25px", marginTop: "25px"}}
              >
                <strong className="fade-in-text" style={{ marginBottom: "0px" }}>
                  Schedule and appointment with your advisor today!
                </strong>{" "}
                <Col>
                  <Calendar
                    style={{
                      width: "100%"
                    }}
                    {...ag}
                    agent={ag}
                    Id={ag.id}
                  ></Calendar>
                </Col>
              </Row>
              <Row
                className="justify-content-md-center"
                style={{ marginBottom: "50px", marginTop: "25px"}}
              >
                <strong className="fade-in-text">Compound Interest Course </strong>{" "}
                <br />
                <Col>
                  <Button
                    style={{backgroundColor: `${ag.secondaryColor}`, width: "100%", border: "none", boxShadow: "2px 2px rgba(0, 0, 0, 0.5)"}}
                    href="https://compoundinterest.com/main-page"
                  >
                    MPI<br />Course
                  </Button>{" "}
                </Col>
              </Row>
              <Row
                className="justify-content-md-center"
                style={{ marginBottom: "25px", marginTop: "50px" }}
              >
                <strong className="fade-in-text">MPI Calculator</strong> <br />
                <Col>
                  <Button
                    style={{backgroundColor: `${ag.secondaryColor}`, width: "100%", border: "none", boxShadow: "2px 2px rgba(0, 0, 0, 0.5)"}}
                    href="https://www.mympi.com/mpi/mpi-calculator"
                  >
                    MPI<br />Calculator
                  </Button>{" "}
                </Col>
              </Row>
            </Container>
          ))}
      </div>
    );
  }
}
