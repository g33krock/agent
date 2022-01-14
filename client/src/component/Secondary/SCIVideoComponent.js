import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import { agentService } from "../../services/AgentService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faVideo,
  faLock,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";

export class SCIVideo extends Component {
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
      <Container className="webinarBackground">
        <Row
          fluid
          className="scvis"
          style={{
            marginTop: "2%",
            marginBottom: "2%",
            justifyContent: "center",
          }}
        >
          <Row
            style={{
              marginBottom: "0px",
              padding: "0px",
            }}
          >
            <h1 className="videohead">ACCESS OUR FREE WEBINAR</h1>
          </Row>
          <Row
            style={{
              backgroundColor: this.props.agent.primaryColor,
              height: "6px",
              width: "50vw",
              marginBottom: "0px",
            }}
          />
          <Row
            style={{
              marginBottom: "2%",
              padding: "0px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <h2 className="videosubhead">
              SECURE COMPOUND INTEREST: "THE SIMPLE PATH TO FULL RETIREMENT"
            </h2>
            {/* <h3 className="videobody">WHAT YOU WILL LEARN</h3> */}
          </Row>
          <Row>
            <Col />
            <Col xs={12} md={4}>
              <Row
                style={{
                  marginBottom: "2%",
                  padding: "0px",
                }}
              >
                <h2 className="columntitle">WEBINAR HOST</h2>
                <small id="columnsubtitle">MPI® CREATOR, CURTIS RAY</small>
              </Row>
              <Row>
                <Col md={1} />
                <Col>
                  <Image
                    fluid
                    src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/images/CurtisWebinar.png"
                    alt="CurtisWebinar"
                    className="webinarImage"
                  />
                </Col>
                <Col md={1} />
              </Row>
            </Col>
                <Col />
            <Col xs={12} md={4} style={{ textAlign: "left" }}>
              <Row
                style={{
                  marginBottom: "2%",
                  padding: "0px",
                  textAlign: "center",
                }}
              >
                <h2 className="columntitle">WHAT YOU WILL LEARN</h2>
                <small id="columnsubtitle">
                  LEARN THE SECRETS TO FULL RETIREMENT INCOME
                </small>
              </Row>
              <Row
                style={{
                  marginBottom: "2%",
                  padding: "0px",
                }}
              >
                <Col xs={3} md={2} id="bullet">
                  <FontAwesomeIcon
                    icon={faAngleDoubleDown}
                    style={{
                      // color: "white",
                      backgroundColor: this.props.agent.primaryColor,
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                      border: `10px solid ${this.props.agent.primaryColor}`,
                    }}
                  />
                </Col>
                <Col xs={9} md={10}>
                  <h3 className="bulletpoints">THE MYTH OF DOWNSIZING</h3>
                  <p id="subbulletpoints">
                    LEARN HOW TO AVOID BEING FORCED TO DOWNSIZE
                  </p>
                </Col>
              </Row>
              <Row
                style={{
                  marginBottom: "2%",
                  padding: "0px",
                }}
              >
                <Col xs={3} sm={2} id="bullet">
                  <FontAwesomeIcon
                    icon={faVideo}
                    style={{
                      // color: "white",
                      backgroundColor: this.props.agent.primaryColor,
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                      border: `10px solid ${this.props.agent.primaryColor}`,
                    }}
                  />
                </Col>
                <Col xs={9} md={10}>
                  <h3 className="bulletpoints">SECURE COMOUND INTEREST</h3>
                  <p id="subbulletpoints">
                    LEARN HOW TO APPLY COMPOUND INTEREST TO YOUR INCOME
                  </p>
                </Col>
              </Row>
              <Row
                style={{
                  marginBottom: "2%",
                  padding: "0px",
                }}
              >
                <Col xs={3} md={2} id="bullet">
                  <FontAwesomeIcon
                    icon={faLock}
                    style={{
                      // color: "white",
                      backgroundColor: this.props.agent.primaryColor,
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                      border: `10px solid ${this.props.agent.primaryColor}`,
                    }}
                  />
                </Col>
                <Col xs={9} md={10}>
                  <h3 className="bulletpoints">SECURE LEVERAGE</h3>
                  <p id="subbulletpoints">
                    LEARN HOW TO APPLY O.P.M. TO YOUR RETIREMENT INCOME
                  </p>
                </Col>
              </Row>
              <Row
                style={{
                  marginBottom: "2%",
                  padding: "0px",
                }}
              >
                <Col xs={3} md={2} id="bullet">
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    style={{
                      // color: "white",
                      backgroundColor: this.props.agent.primaryColor,
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                      border: `10px solid ${this.props.agent.primaryColor}`,
                    }}
                  />
                </Col>
                <Col xs={9} md={10}>
                  <h3 className="bulletpoints">ACHIEVE FULL RETIREMENT</h3>
                  <p id="subbulletpoints">
                    LEARN HOW TO MAXIMIZE YOUR INCOME DURING YOUR GOLDEN YEARS
                  </p>
                </Col>
              </Row>
            </Col>
            <Col />
          </Row>
          <Row fluid className="videobuttonrow">
            <Col />
            <Col>
              <Button
                className="videobutton"
                style={{
                  backgroundColor: this.props.agent.primaryColor,
                  border: "none",
                  boxShadow: "2px 2px rgba(0, 0, 0, 0.5)",
                  color: `${this.props.agent.textColor}`,
                  textShadow: "2px 2px rgba(0, 0, 0, 0.5)",
                }}
                href="/webinarregistration"
              >
                <h2 className="videobuttontext">Reserve My Spot</h2>
              </Button>
            </Col>
            <Col />
          </Row>
        </Row>
      </Container>
    );
  }
}
