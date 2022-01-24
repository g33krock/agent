import React, { Component } from "react";
import { Row, Col, Button, Container, Image } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
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
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: [],
      addAgents: [],
      bioDisplay: "",
    };
  }

  async componentDidMount() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
    const addAgents = await agentService.addAgents(agentObject);
    this.setState({ addAgents });
    this.setState({ bioDisplay: "none" });
  }

  render() {
    function toggleBio() {
      var x = document.getElementById("bioBlock");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
    return (
      <div style={{ margin: "0px" }}>
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Row
              key={ag.toString()}
              style={{
                backgroundImage: `-webkit-linear-gradient(45deg, ${ag.primaryColor} 40%, #000000 40%)`,
                minHeight: "80vh",
              }}
            >
              <Row>
                <h1 style={{ marginTop: "2%", color: ag.textColor ? ag.textColor : 'white' }}>
                  OUR MISSION
                </h1>
              </Row>
              <Row>
                <p
                  style={{
                    color: ag.textColor ? ag.textColor : 'white',
                    textShadow: '1px 1px black',
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "75%",
                  }}
                >
                  {ag.bio}
                </p>
              </Row>
              <Container
                fluid
                style={{
                  borderRadius: "5px",
                  backgroundColor: "whitesmoke",
                  margin: "auto",
                  width: "75%",
                  padding: "1%",
                }}
              >
                <Row>
                  <Col>
                    <h2
                      style={{
                        color: "black",
                        marginTop: "1%",
                        marginBottom: "1%",
                      }}
                    >
                      OUR LOCATION
                    </h2>
                  </Col>
                  <Col>
                    <h2
                      style={{
                        color: "black",
                        marginTop: "1%",
                        marginBottom: "1%",
                      }}
                    >
                      OUR TEAM
                    </h2>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ margin: "auto" }} sm={6}>
                    <Container
                      style={{
                        width: "90%",
                        backgroundColor: "white",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      <Row style={{ marginTop: "1%", paddingTop: "1%" }}>
                        <Col sm={1}>
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </Col>
                        <Col sm={11} style={{ textAlign: "left" }}>
                          <p>
                            <strong>ADDRESS</strong>
                            <br />
                            {ag.address1}
                            <br />
                            {ag.city}, {ag.state} {ag.zip}
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <FontAwesomeIcon icon={faEnvelope} />
                        </Col>
                        <Col sm={11} style={{ textAlign: "left" }}>
                          <p>
                            <strong>EMAIL</strong>
                            <br />
                            {ag.email}
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={1}>
                          <FontAwesomeIcon icon={faPhone} />
                        </Col>
                        <Col sm={11} style={{ textAlign: "left" }}>
                          <p>
                            <strong>PHONE</strong>
                            <br />
                            {ag.phone}
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col></Col>
                        {ag.facebook && (
                          <Col style={{ padding: "0px" }}>
                            <a href={ag.facebook} style={{ color: "blue" }}>
                              <FontAwesomeIcon icon={faFacebook} />
                            </a>
                          </Col>
                        )}
                        {ag.twitter && (
                          <Col style={{ padding: "0px" }}>
                            <a href={ag.twitter} style={{ color: "lightblue" }}>
                              <FontAwesomeIcon icon={faTwitter} />
                            </a>
                          </Col>
                        )}
                        {ag.instagram && (
                          <Col style={{ padding: "0px" }}>
                            <a href={ag.instagram} style={{ color: "orange" }}>
                              <FontAwesomeIcon icon={faInstagram} />
                            </a>
                          </Col>
                        )}
                        {ag.tiktok && (
                          <Col style={{ padding: "0px" }}>
                            <a href={ag.tiktok} style={{ color: "purple" }}>
                              <FontAwesomeIcon icon={faTiktok} />
                            </a>
                          </Col>
                        )}
                        {ag.youtube && (
                          <Col style={{ padding: "0px" }}>
                            <a href={ag.youtube} style={{ color: "red" }}>
                              <FontAwesomeIcon icon={faYoutube} />
                            </a>
                          </Col>
                        )}
                        {ag.pinterest && (
                          <Col style={{ padding: "0px" }}>
                            <a href={ag.pinterest} style={{ color: "pink" }}>
                              <FontAwesomeIcon
                                icon={faPinterest}
                                // style={{ marginBottom: "50%" }}
                              />
                            </a>
                          </Col>
                        )}
                        <Col></Col>
                      </Row>
                    </Container>
                  </Col>
                  <Col sm={6}>
                    <Carousel
                      showIndicators={false}
                      showArrows={false}
                      infiniteLoop={true}
                      showThumbs={false}
                      showStatus={false}
                      autoPlay={true}
                      interval={6100}
                      style={{marginTop: "0px"}}
                    >
                      {this.state.addAgents &&
                        this.state.addAgents.map((aag) => (
                          <div key={aag.image}>
                            <Row>
                              <Col>
                                <Row>
                                  <Image fluid src={aag.image} alt={aag.firstName} style={{marginLeft: "auto", marginRight: "auto", marginBottom: "1%"}} />
                                </Row>
                                <Row>
                                  <Button
                                    style={{
                                      color: "white",
                                      backgroundColor: ag.primaryColor,
                                      marginLeft: "auto", marginRight: "auto",
                                      width: "50%"
                                    }}
                                    onClick={() => {
                                      toggleBio();
                                    }}
                                  >
                                    <strong style={{ color: "white" }}>
                                      READ BIO
                                    </strong>
                                  </Button>
                                </Row>
                                <Row>
                                  <p
                                    id="bioBlock"
                                    style={{
                                      color: "black",
                                      display: this.state.bioDisplay,
                                    }}
                                  >
                                    {aag.bio}
                                  </p>
                                </Row>
                              </Col>
                            </Row>
                          </div>
                        ))}
                    </Carousel>
                  </Col>
                </Row>
              </Container>
            </Row>
          ))}
      </div>
    );
  }
}
