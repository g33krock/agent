import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { agentService } from "../services/AgentService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export class Footer extends Component {
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
    console.log(this.state.agent);
    const agentObj = agent.map((ag) => ag);
    console.log(agentObj);
  }

  render() {
    return (
      <>
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Row key={ag.toString()} style={{backgroundColor:"black", width: "100%", margin: "0px"}}>
              <Col style={{ color: `${ag.textColor}`, padding: "0px" }} >
                <h3>Location</h3>
                
                <strong>{ag.address1}</strong>
                <br />
                <strong>
                  {ag.city}, {ag.state}, {ag.zip}
                </strong>
                <br />
                <strong>{ag.phone}</strong>
              </Col>
              <Col style={{padding: "0px"}}></Col>
              <Col style={{ color: `${ag.textColor}`, padding: "0px" }} >
                <h3>Connect with us!</h3>
                
                <Row>
                  <Col style={{padding: "0px"}}/>
                  <Col style={{padding: "0px"}}/>
                  <Col style={{padding: "0px"}}/>
                  {ag.facebook && (
                  <Col style={{padding: "0px"}}>
                    <a
                      href={ag.facebook}
                      style={{ color: "blue" }}
                      className="bouncey"
                    >
                      <FontAwesomeIcon
                        icon={faFacebook}
                        style={{ fontSize: "200%" }}
                      />
                    </a>
                  </Col>
                  )}
                  {ag.twitter && (
                  <Col style={{padding: "0px"}}>
                    <a
                      href={ag.twitter}
                      style={{ color: "lightblue" }}
                      className="bouncey"
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        style={{ fontSize: "200%"  }}
                      />
                    </a>
                  </Col>
                  )}
                  {ag.instagram && (
                  <Col style={{padding: "0px"}}>
                    <a
                      href={ag.instagram}
                      style={{ color: "orange" }}
                      className="bouncey"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        style={{ fontSize: "200%" }}
                      />
                    </a>
                  </Col>
                  )}
                  {ag.tiktok && (
                  <Col style={{padding: "0px"}}>
                    <a
                      href={ag.tiktok}
                      style={{ color: "purple" }}
                      className="bouncey"
                    >
                      <FontAwesomeIcon
                        icon={faTiktok}
                        style={{ fontSize: "200%" }}
                      />
                    </a>
                  </Col>
                  )}
                  {ag.youtube && (
                    <Col style={{padding: "0px"}}>
                      <a
                        href={ag.youtube}
                        style={{ color: "red" }}
                        className="bouncey"
                      >
                        <FontAwesomeIcon
                          icon={faYoutube}
                          style={{ fontSize: "200%" }}
                        />
                      </a>
                    </Col>
                  )}
                  {ag.pinterest && (
                    <Col style={{padding: "0px"}}>
                      <a
                        href={ag.pinterest}
                        style={{ color: "pink" }}
                        className="bouncey"
                      >
                        <FontAwesomeIcon
                          icon={faPinterest}
                          style={{ fontSize: "200%" }}
                        />
                      </a>
                    </Col>
                  )}
                  <Col style={{padding: "0px"}}/>
                  <Col style={{padding: "0px"}}/>
                  <Col style={{padding: "0px"}}/>
                </Row>
              </Col>
            </Row>
          ))}
      </>
    );
  }
}
