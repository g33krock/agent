import React, { Component } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { agentService } from "../../services/AgentService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

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
                  marginBottom: "5px",
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
                  marginBottom: "5px",
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
          {this.state.agent &&
            this.state.agent.map((ag) => (
              <>
                <Row style={{ padding: "1%" }}>
                  <Image
                    src={ag.icon}
                    style={{
                      maxHeight: "100px",
                      width: "auto",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                </Row>
                <Row
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    minHeight: "10vh",
                  }}
                >
                  <Col>
                    <Row style={{ marginLeft: "auto", marginRight: "auto" }}>
                      <h3
                        style={{ color: "white", textShadow: "2px 2px black" }}
                      >
                        Connect with us!
                      </h3>
                      <Col sm={3} />
                      {ag.facebook && (
                        <Col>
                          <a href={ag.facebook} className="bouncey">
                            <FontAwesomeIcon
                              icon={faFacebook}
                              style={{ fontSize: "200%" }}
                            />
                          </a>
                        </Col>
                      )}
                      {ag.twitter && (
                        <Col>
                          <a href={ag.twitter} className="bouncey">
                            <FontAwesomeIcon
                              icon={faTwitter}
                              style={{ fontSize: "200%" }}
                            />
                          </a>
                        </Col>
                      )}
                      {ag.instagram && (
                        <Col>
                          <a href={ag.instagram} className="bouncey">
                            <FontAwesomeIcon
                              icon={faInstagram}
                              style={{ fontSize: "200%" }}
                            />
                          </a>
                        </Col>
                      )}
                      {ag.tiktok && (
                        <Col>
                          <a href={ag.tiktok} className="bouncey">
                            <FontAwesomeIcon
                              icon={faTiktok}
                              style={{ fontSize: "200%" }}
                            />
                          </a>
                        </Col>
                      )}
                      {ag.youtube && (
                        <Col>
                          <a href={ag.youtube} className="bouncey">
                            <FontAwesomeIcon
                              icon={faYoutube}
                              style={{ fontSize: "200%" }}
                            />
                          </a>
                        </Col>
                      )}
                      {ag.pinterest && (
                        <Col>
                          <a href={ag.pinterest} className="bouncey">
                            <FontAwesomeIcon
                              icon={faPinterest}
                              style={{ fontSize: "200%" }}
                            />
                          </a>
                        </Col>
                      )}
                      <Col sm={3} />
                    </Row>
                  </Col>
                  <Col>
                    <h3 style={{ color: "white", textShadow: "1px 1px black" }}>
                      {ag.address1}
                    </h3>
                    <h3 style={{ color: "white", textShadow: "1px 1px black" }}>
                      {ag.city}, {ag.state}, {ag.zip}
                    </h3>
                    <h3 style={{ color: "white", textShadow: "1px 1px black" }}>
                      {ag.phone}
                    </h3>
                  </Col>
                </Row>
              </>
            ))}
        </Container>
      </div>
    );
  }
}
