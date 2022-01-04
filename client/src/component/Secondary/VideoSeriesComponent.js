import React, { Component } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Collapsible from "react-collapsible";
import { agentService } from "../../services/AgentService";
import { videoService } from "../../services/VideoService";
import { AltCalendar } from "./AltCalendarComponent";

export class VideoSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: this.props.agent,
      videos: [],
      video: {
        "id": "1",
        "created_at": "2021-12-17T17:28:05.000Z",
        "title": "Welcome to Compound Interest",
        "vidlink": "https://compoundinterest.com/wp-content/uploads/2021/11/01-Welcome-To-Compound-Interest-1.mp4",
        "poster": "https://compoundinterest.com/wp-content/uploads/2021/11/Chapter-1_-Welcome-to-Compound-Interest_-The-Retirement-You-Deserve.png",
        "number": 1,
        "category": "none"
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
      <Container fluid style={{backgroundColor: 'grey', minHeight: '80vh', paddingBottom:'3%'}}>
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
              <Col sm={3}>
                <Row style={{marginTop:"2%", marginBottom:"2%"}}><Button style={{width:"75%", marginLeft: "auto", marginRight: "auto"}}>Arbitrary Button</Button></Row>
                <Container style={{backgroundColor: "rgba(255, 255, 255, 0.514)", borderRadius: "5px"}}>
                <Row><h3><strong>Video Series</strong></h3></Row>
                {this.state.videos.filter(vid => vid.category === 'none').map((vid) => (
                  <option
                  className="selectVideo"
                    value={vid.id}
                    onClick={this.setVideo}
                  >{vid.id} | {vid.title}
                  </option>
                ))}
                <Collapsible trigger={[<BsChevronDown />, "8 MPI® Plans"]}>
                {this.state.videos.filter(vid => vid.category === 'plans').map((vid) => (
                  <option
                  className="selectVideo"
                    value={vid.id}
                    onClick={this.setVideo}
                  >{vid.id} | {vid.title}
                  </option>
                ))}
                </Collapsible>
                </Container>
              </Col>
              <Col sm={7}>
                <Row>
                  <h1>COMPOUND INTEREST</h1>
                  <h2>THER RETIREMENT YOU DESERVE</h2>
                </Row>
                <Row style={{marginBottom: "1%"}}><Container style={{backgroundColor: ag.primaryColor, width: "50%", borderRadius: "5px"}}><h3>{this.state.video.title}</h3></Container></Row>
                <Row>
                <iframe
                  width="853"
                  height="480"
                  src={this.state.video.vidlink}
                  title={this.state.video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                </Row>
                <Row><h2>ALWAYS BE COMPOUNDING™</h2></Row>
              </Col>
              <Col sm={2}>
                <Row style={{marginTop:"2%", marginBottom:"2%"}}>
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
