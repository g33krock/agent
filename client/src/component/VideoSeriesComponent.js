import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { agentService } from "../services/AgentService";
import { videoService } from "../services/VideoService";

export class VideoSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: this.props.agent,
      videos: [],
      video: ""
    };
  }

  async componentDidMount() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
    const videos = await videoService.all();
    this.setState({ videos });
    console.log(videos)
  }

  render() {
    // const agency = "Not Your Mother's Insurance Agency";
    return (
      <Container fluid>
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Row style={{ margin: "10px", position: "relative", color:ag.textColor }} key={ag.toString()}>
                <Row ><h1>{ag.firstName} {ag.lastName} and Curtis Ray present</h1></Row>
                <Row style={{ margin: "10px", height: "100vh" }}>
              {/* <Col xs={2}>
                {this.state.videos &&
                  this.state.videos.map((video) => 
                  <Row key={video.id} value={video} onClick={() => this.setState({video})} style={{backgroundColor: ag.primaryColor, border: `1px solid ${ag.secondaryColor}`, margin: "1px"}}>{video.title}</Row>
                  )}
              </Col> */}
              <Col style={{ margin: "10px", position: "relative" }}>
                {/* <Container
                  style={{
                    backgroundColor: `${ag.primaryColor}`,
                    borderRadius: "15px",
                    minHeight: "300px",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                > */}
                      <iframe
                        width="90%"
                        height="auto"
                        // src={`${this.state.video.link}`}
                        src="https://compoundinterest.com/main-page"
                        title={this.state.video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ margin: "1%", boxShadow: "2px 2px rgba(0, 0, 0, 0.5)", height:"95vh"}}
                        className="cropped fade-in-text"
                      ></iframe>
                {/* </Container> */}
              </Col>
              </Row>
            </Row>
          ))}
      </Container>
    );
  }
}
