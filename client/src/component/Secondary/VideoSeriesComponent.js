import React, { Component } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Collapsible from "react-collapsible";
import { agentService } from "../../services/AgentService";
import { videoService } from "../../services/VideoService";
import { VideoCalendar } from "./VideoCalendarComponent";

export class VideoSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: this.props.agent,
      videos: [],
      video: {
        id: "1",
        created_at: "2021-12-17T17:28:05.000Z",
        title: "Welcome to Compound Interest",
        vidlink:
          "https://compoundinterest.com/wp-content/uploads/2021/11/01-Welcome-To-Compound-Interest-1.mp4",
        poster:
          "https://compoundinterest.com/wp-content/uploads/2021/11/Chapter-1_-Welcome-to-Compound-Interest_-The-Retirement-You-Deserve.png",
        number: 1,
        category: "none",
      },
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
      <Container
        fluid
        style={{
          backgroundColor: "rgb(211, 211, 211)",
          // minHeight: "90vh",
          paddingLeft: "0px",
          // paddingRight: '8px',
          // paddingBottom: "3%",
          border: "4px solid black",
          // margin: "2% auto 2% auto",
          // maxWidth: "95vw",
        }}
      >
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Row
              style={{
                // margin: "10px",
                position: "relative",
                color: "black",
              }}
              key={ag.toString()}
            >
              <Col
                sm={3}
                style={{
                  overflow: "scroll",
                  minHeight: "100vh",
                  paddingRight: "0px",
                  backgroundColor: "rgba(211, 211, 211)",
                }}
              >
                <Row
                  style={{
                    marginTop: "2%",
                    marginBottom: "2%",
                    paddingBottom: "2%",
                    borderBottom: "1px solid black",
                  }}
                >
                  <Button
                    className="videoButton"
                    style={{
                      width: "75%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    Webinar
                  </Button>
                </Row>
                <Row
                  style={{
                    marginTop: "2%",
                    marginBottom: "2%",
                    paddingBottom: "2%",
                    borderBottom: "1px solid black",
                  }}
                >
                  <Button
                    className="videoButton"
                    style={{
                      width: "75%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    Documentary
                  </Button>
                </Row>
                <Row></Row>
                <Container
                  style={{
                    backgroundColor: "rgba(211, 211, 211)",
                    borderRadius: "5px",
                    padding: "0px",
                  }}
                >
                  <Row style={{ borderBottom: "2px solid black" }}>
                    <h3>
                      <strong>Video Series</strong>
                    </h3>
                  </Row>
                  {this.state.videos
                    .filter((vid) => vid.category === "none")
                    .map((vid) => (
                      <option
                        className="selectVideo"
                        value={vid.id}
                        onClick={this.setVideo}
                      >
                        {vid.id} | {vid.title}
                      </option>
                    ))}
                  <Collapsible
                    trigger={[
                      <BsChevronDown />,
                      <h4 style={{ fontSize: "110%" }}> 8 MPI® Plans</h4>,
                    ]}
                  >
                    {this.state.videos
                      .filter((vid) => vid.category === "plans")
                      .map((vid) => (
                        <option
                          className="selectVideo"
                          value={vid.id}
                          onClick={this.setVideo}
                        >
                          {vid.id} | {vid.title}
                        </option>
                      ))}
                  </Collapsible>
                </Container>
              </Col>
              <Col sm={7} style={{ backgroundColor: "rgb(225, 225, 225" }}>
                <Row>
                  <h1 className="videoseriestitle">COMPOUND INTEREST</h1>
                  <h2 className="videoseriessubtitle">
                    THE RETIREMENT YOU DESERVE
                  </h2>
                </Row>
                <Row style={{ marginBottom: "1%", marginTop: '1%' }}>
                  <Container
                    style={{
                      backgroundColor: ag.primaryColor,
                      width: "75%",
                      borderRadius: "5px",
                      color: "white",
                      fontWeight: "700",
                    }}
                  >
                    <h3>Curtis Ray Presents</h3>
                  </Container>
                </Row>
                <Row style={{ padding: "1%" }}>
                  <div
                    style={{ position: "relative", paddingBottom: "56.25%" }}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src={this.state.video.vidlink}
                      title={this.state.video.title}
                      frameBorder="4"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        border: "4px solid black",
                        backgroundColor: "black",
                        position: "absolute",
                        left: "0px",
                      }}
                    />
                  </div>
                </Row>
                <Row>
                  <h2 className="videofoot">ALWAYS BE COMPOUNDING™</h2>
                </Row>
              </Col>
              <Col style={{ backgroundColor: "rgb(100, 100,100" }}>
                <Row
                  style={{
                    paddingTop: "5%",
                    paddingBottom: "5%",
                    backgroundColor: "white",
                    borderRight: "4px solid black",
                  }}
                >
                  <Image fluid src={ag.profileMPIGrey} />
                </Row>
                <Row
                  style={{
                    paddingTop: "2%",
                    paddingBottom: "2%",
                    backgroundColor: "white",
                    borderRight: "4px solid black",
                  }}
                >
                  <Image fluid src={ag.logo} />
                  <p className="emailSize">{ag.email}</p>
                </Row>
                <Row
                  style={{
                    marginTop: "5%",
                    marginBottom: "5%",
                    paddingBottom: "5%",
                    borderBottom: "1px solid black",
                  }}
                >
                  <VideoCalendar agent={ag} />
                </Row>
                <Row
                  style={{
                    marginTop: "5%",
                    marginBottom: "5%",
                    paddingBottom: "5%",
                    borderBottom: "1px solid black",
                  }}
                >
                  <div>
                    <Button
                      className="videoButton"
                      style={{
                        width: "100%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      MPI® Calculator
                    </Button>
                  </div>
                </Row>
                <Row
                  style={{
                    marginTop: "5%",
                    marginBottom: "5%",
                    paddingBottom: "5%",
                    borderBottom: "1px solid black",
                  }}
                >
                  <div>
                    <Button
                      className="videoButton"
                      style={{
                        width: "100%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      Share
                    </Button>
                  </div>
                </Row>
                <Row
                  style={{
                    marginTop: "5%",
                    marginBottom: "5%",
                    paddingBottom: "5%",
                    borderBottom: "1px solid black",
                  }}
                >
                  <div>
                    <Button
                      className="videoButton"
                      style={{
                        width: "100%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      Leave A Review
                    </Button>
                  </div>
                </Row>
              </Col>
            </Row>
          ))}
      </Container>
    );
  }
}
