import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { agentService } from "../../services/AgentService";
import { AltCalendar } from "./AltCalendarComponent";
import $ from "jquery";

export class AgentCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: [],
      addAgents: [],
    };
  }

  async componentDidMount() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
    const addAgents = await agentService.addAgents(agentObject);
    this.setState({ addAgents });
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
                backgroundImage: `-webkit-linear-gradient(45deg, ${ag.primaryColor} 40%, #000000 40%)`,
              }}
            >
              <Col style={{ margin: "10px" }} sm={4}>
                <h2
                  style={{
                    color: ag.textColor,
                    marginTop: "10%",
                    textShadow: "1px 1px black",
                  }}
                >
                  Meet Your MPI®
                  <br />
                  Certified Advisor
                </h2>
                <AltCalendar agent={ag} />
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
                          <img src={aag.image} alt={aag.firstName} />
                          <h3 style={{ color: ag.textColor }}>
                            {aag.firstName} {aag.lastName}
                          </h3>
                          <h4 style={{ color: ag.textColor }}>{aag.title}</h4>
                        </Col>
                        <Col>
                          <Button
                            onClick={() => {
                              toggleBio();
                            }}
                          >
                            Bio
                          </Button>
                          <p id="bioBlock" style={{ color: ag.textColor }}>
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
      </Container>
    );
  }
}
