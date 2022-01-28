import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { agentService } from "../../../services/AgentService";
import { AltCalendar } from "./AltCalendarComponent";
import $ from "jquery";

export class AgentCarousel extends Component {
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

  async changeState() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
    const addAgents = await agentService.addAgents(agentObject);
    this.setState({ addAgents });
    this.setState({ bioDisplay: "none" });
  }

  render() {
    $(document).on("scroll", function () {
      var pageTop = $(document).scrollTop();
      var pageBottom = pageTop + $(window).height();
      var tags = $(".tag");

      for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];

        if ($(tag).position().top < pageBottom) {
          $(tag).addClass("visible");
        } else {
          $(tag).removeClass("visible");
        }
      }
    });
    function toggleBio() {
      // if (this.state.bioDisplay === "none") {
      //   this.setState({bioDisplay: "block"});
      // } else {
      //   this.setState({bioDisplay: "none"});
      // }
      var x = document.getElementById("bioBlock");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
    return (
      <Container>
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Row
              key={ag.toString()}
              style={{
                backgroundImage: `-webkit-linear-gradient(45deg, ${ag.primaryColor} 40%, ${ag.secondaryColor} 40%)`,
              }}
            >
              <Col style={{ margin: "auto" }} sm={4}>
                <h2
                  style={{
                    color: this.props.agent.textColor ? this.props.agent.textColor : "black",
                    marginTop: "10%",
                    textShadow: "1px 1px black",
                  }}
                >
                  START YOUR MPI® SECURE
                  <br />
                  COMPOUND INTEREST
                  <br />
                  ACCOUNT™ TODAY
                </h2>
                <AltCalendar agent={ag} />
              </Col>
              <Col sm={8}>
                <Carousel
                  showIndicators={false}
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
                            <h1
                              style={{
                                color: 'white',
                                textShadow: "1px 1px black",
                              }}
                            >
                              MEET YOUR
                            </h1>
                            <h2
                              style={{
                                color: 'white',
                                textShadow: "1px 1px black",
                              }}
                            >
                              MPI® CERTIFIED ADVISOR
                            </h2>
                            <img src={aag.image} alt={aag.firstName} />
                            <h4
                              style={{
                                color: 'white',
                                textShadow: "1px 1px black",
                              }}
                            >
                              {aag.firstName} {aag.lastName}
                              <br />
                              {aag.title}
                            </h4>
                            <Button
                              // variant="link"
                              style={{
                                color: ag.textColor ? ag.textColor : 'black',
                                backgroundColor: ag.primaryColor,
                                marginBottom: "1%",
                              }}
                              onClick={() => {
                                toggleBio();
                              }}
                            >
                              <strong
                                style={{
                                  color: aag.textColor,
                                  textShadow: "1px 1px black",
                                }}
                              >
                                READ BIO
                              </strong>
                            </Button>
                            <Col style={{ marginLeft: "20%" }}>
                              <p
                                id="bioBlock"
                                style={{
                                  color: ag.textColor,
                                  display: this.state.bioDisplay,
                                  textShadow: "1px 1px black",
                                }}
                              >
                                {aag.bio}
                              </p>
                            </Col>
                          </Col>
                        </Row>
                      </div>
                    ))}
                </Carousel>
              </Col>
            </Row>
          ))}
      </Container>
    );
  }
}
