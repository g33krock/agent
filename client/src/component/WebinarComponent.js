import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { agentService } from "../services/AgentService";

export class Webinar extends Component {
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
    console.log(this.props.agent);
    console.log(ID);
  }

  render() {
    // const agency = "Not Your Mother's Insurance Agency";
    return (

                <Container
                  style={{
                    backgroundColor: `${this.props.agent.secondaryColor}`,
                    // borderRadius: "15px",
                    alignContent: "right",
                    // marginBottom: "5px",
                    // marginTop: "5px"
                  }}
                >
                  <Row style={{ color: `${this.props.agent.textColor}`, textShadow: "1px 1px black", marginTop: "3%", marginBottom: "3%" }}>
                    <h1>What is MPI®?</h1>
                  </Row>
                  <Row style={{ minHeight: "300px" }}>
                    <Col>
                      <p style={{ color: `${this.props.agent.textColor}` }}>
                        Check out this sweet sweet webinar!
                      </p>
                      <Button
                        style={{ backgroundColor: `black`, border: "none", boxShadow: "2px 2px rgba(0, 0, 0, 0.5)", marginBottom: "5px" }}
                        href="https://app.funnel-preview.com/for_domain/compoundinterest.clickfunnels.com/auto-webinar-registration1637620053002?updated_at=23eb1d211f8f424260073576cbe1cc23v2&track=0&preview=true"
                      >
                        Register for Webinar
                      </Button>
                    </Col>
                    <Col style={{paddingLeft: "0px" }}>
                      <iframe
                        width="507"
                        height="285"
                        src="https://www.youtube.com/embed/9YsYutkBryE"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{  boxShadow: "2px 2px rgba(0, 0, 0, 0.5)", paddingLeft: "0px", marginBottom: "3%"  }}
                      ></iframe>
                    </Col>
                  </Row>
                </Container>

    );
  }
}
