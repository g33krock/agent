import React, { Component } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { agentService } from "../../services/AgentService";
import { videoService } from "../../services/VideoService";
import { AltCalendar } from "./AltCalendarComponent";

export class VideoSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: this.props.agent,
      videos: [],
      video: "",
    };
  }

  async componentDidMount() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
    const videos = await videoService.all();
    this.setState({ videos });
    console.log(videos);
  }

  setVideo = (vid) => {
    const videoId = vid.target.value;
    console.log(vid.value);
    const video = this.state.videos.find((video) => video.id === videoId);
    this.setState({ video });
    console.log(this.state.video);
  };

  render() {
    return (
      <Container fluid>
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Row
              style={{
                margin: "10px",
                position: "relative",
                color: "black",
              }}
              key={ag.toString()}
            >
              <Col sm={2}>
                <Row><Button>Arbitrary Button</Button></Row>
                {this.state.videos.map((vid) => (
                  <option
                    value={vid.id}
                    onClick={this.setVideo}
                  >{vid.id} | {vid.title}
                  </option>
                ))}
              </Col>
              <Col sm={8}>
                <Row>
                  <h1>COMPOUND INTEREST</h1>
                  <h2>THER RETIREMENT YOU DESERVE</h2>
                </Row>
                <Row><Container style={{backgroundColor: ag.primaryColor, width: "50%"}}><h3>{this.state.video.title}</h3></Container></Row>
                <Row>
                <iframe
                  width="853"
                  height="480"
                  src={this.state.video.vidlink}
                  title={this.state.video.title}
                />
                </Row>
                <Row><h2>ALWAYS BE COMPOUNDING™</h2></Row>
              </Col>
              <Col sm={2}>
                <Row>
                  <Image
                  roundedCircle
                  fluid
                  src={ag.profilePic} />
                </Row>
                <Row>
                  <Image
                  fluid
                  src={ag.logo} />
                </Row>
                <Row>
                <AltCalendar agent={ag} />
                </Row>
              </Col>
            </Row>
          ))}
      </Container>
    );
  }
}
