import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { agentService } from "../../services/AgentService";

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
              }}
            >
              <Row>
                <h1 style={{ marginTop: "2%", color: ag.textColor }}>
                  OUR MISSION
                </h1>
              </Row>
              <Row>
                <p style={{ color: ag.textColor }}>{ag.bio}</p>
              </Row>
              <Col style={{ margin: "10px" }} sm={4}>
                <h2
                  style={{
                    color: ag.textColor,
                    marginTop: "10%",
                    textShadow: "1px 1px black",
                  }}
                >
                  OUR LOCATION
                </h2>

              </Col>
              <Col>
                <Carousel
                  showArrows={false}
                  infiniteLoop={true}
                  showThumbs={false}
                  showStatus={false}
                  autoPlay={true}
                  interval={6100}
                >
                  {this.state.addAgents &&
                    this.state.addAgents.map((aag) => (
                      <div key={aag.image}>
                        <Row>
                          <Col>
                            <h2
                              style={{
                                color: ag.textColor,
                                marginTop: "10%",
                                textShadow: "1px 1px black",
                              }}
                            >
                              OUR TEAM
                            </h2>
                            <img src={aag.image} alt={aag.firstName} />
                            <h4 style={{ color: ag.textColor }}>
                              {aag.firstName} {aag.lastName}
                              <br />
                              {aag.title}
                            </h4>
                            <Button
                              variant="link"
                              style={{ color: ag.textColor }}
                              onClick={() => {
                                toggleBio();
                              }}
                            >
                              <strong style={{ color: aag.textColor }}>
                                READ BIO
                              </strong>
                            </Button>
                            <p
                              id="bioBlock"
                              style={{
                                color: ag.textColor,
                                display: this.state.bioDisplay,
                              }}
                            >
                              {aag.bio}
                            </p>
                          </Col>
                        </Row>
                      </div>
                    ))}
                </Carousel>
              </Col>
            </Row>
          ))}
      </div>
    );
  }
}
