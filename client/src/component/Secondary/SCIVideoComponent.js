import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { agentService } from "../../services/AgentService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faDollarSign,
  faVideo,
  faLock,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";

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
      <Container
        style={{
          backgroundColor: `black`,

          // zIndex: "-1",
        }}
      >
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
            <h1 className="videohead">REGISTER FOR THE FREE WEBINAR</h1>
          </Row>
          <Row
            style={{
              backgroundColor: this.props.agent.primaryColor,
              height: "2px",
              width: "50vw",
              marginBottom: "2%",
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
            <Col xs={0} md={1} />
            <Col xs={12} md={5} style={{ textAlign: "left" }}>
              <Row
                style={{
                  marginBottom: "2%",
                  padding: "0px",
                }}
              >
                <h2 style={{ color: this.props.agent.primaryColor, fontWeight: '700' }} className="whatYouWillLearn">What You Will Learn</h2>
              </Row>
              <Row
                style={{
                  marginBottom: "2%",
                  padding: "0px",
                }}
              >
                <Col xs={3} md={2}>
                  <FontAwesomeIcon
                    icon={faAngleDoubleDown}
                    style={{
                      color: "white",
                      backgroundColor: this.props.agent.primaryColor,
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      border: `3px solid ${this.props.agent.primaryColor}`,
                    }}
                  />
                </Col>
                <Col xs={9} md={10}>
                  <h3 className="bulletpoints">The Myth of Downsizing</h3>
                </Col>
              </Row>
              <Row
                style={{
                  marginBottom: "2%",
                  padding: "0px",
                }}
              >
                <Col xs={3} sm={2}>
                  <FontAwesomeIcon
                    icon={faVideo}
                    style={{
                      color: "white",
                      backgroundColor: this.props.agent.primaryColor,
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      border: `3px solid ${this.props.agent.primaryColor}`,
                    }}
                  />
                </Col>
                <Col xs={9} md={10}>
                  <h3 className="bulletpoints">
                    The Phenomenon of Secure Compound Interest
                  </h3>
                </Col>
              </Row>
              <Row
                style={{
                  marginBottom: "2%",
                  padding: "0px",
                }}
              >
                <Col xs={3} md={2}>
                  <FontAwesomeIcon
                    icon={faLock}
                    style={{
                      color: "white",
                      backgroundColor: this.props.agent.primaryColor,
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      border: `3px solid ${this.props.agent.primaryColor}`,
                    }}
                  />
                </Col>
                <Col xs={9} md={10}>
                  <h3 className="bulletpoints">Secure Leverage</h3>
                </Col>
              </Row>
              <Row
                style={{
                  marginBottom: "2%",
                  padding: "0px",
                }}
              >
                <Col xs={3} md={2}>
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    style={{
                      color: "white",
                      backgroundColor: this.props.agent.primaryColor,
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      border: `3px solid ${this.props.agent.primaryColor}`,
                    }}
                  />
                </Col>
                <Col xs={9} md={10}>
                  <h3 className="bulletpoints">Achieving Full Retirement</h3>
                </Col>
              </Row>
              <Row
                style={{
                  marginBottom: "2%",
                  padding: "0px",
                }}
              >
                <Col xs={3} md={2}>
                  <FontAwesomeIcon
                    icon={faHome}
                    style={{
                      color: "white",
                      backgroundColor: this.props.agent.primaryColor,
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      border: `3px solid ${this.props.agent.primaryColor}`,
                    }}
                  />
                </Col>
                <Col xs={9} md={10}>
                  <h3 className="bulletpoints">Generational Wealth</h3>
                </Col>
              </Row>
            </Col>
            <Col xs={0} md={1} />
            <Col
              xs={12}
              md={4}
              style={{
                textAlign: "center",
              }}
            >
              <h2 style={{ color: this.props.agent.primaryColor, fontWeight: '700' }}>Register Your Spot Below</h2>
              <small style={{ color: "white" }}>
                Just enter your name & email below to secure your spot on this
                webinar.
              </small>
              <Form>
                <FormGroup controlId="formaBasicDate">
                  <Input type="date" />
                </FormGroup>
                <FormGroup controlId="formaBasicName">
                  <Input placeholder="First and Last Name" type="text" />
                </FormGroup>
                <FormGroup controlId="formaBasicEmail">
                  <Input placeholder="Email Address" type="email" />
                </FormGroup>
              </Form>
              <Row fluid className="videobuttonrow">
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
                  <h2 className="videobuttontext">
                    Register
                  </h2>
                </Button>
              </Row>
            </Col>
            <Col xs={0} md={1} />
          </Row>
        </Row>
      </Container>
    );
  }
}
