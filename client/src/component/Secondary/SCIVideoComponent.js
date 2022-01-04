import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { agentService } from "../../services/AgentService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faDollarSign,
  faVideo,
  faLock,
  faAngleDoubleDown
} from "@fortawesome/free-solid-svg-icons";

export class SCIVideo extends Component {
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
  }

  render() {
    return (
      <Container
        style={{
          backgroundColor: `black`,
          position: "relative",
          zIndex: "-1",
        }}
      >
        <Row
          fluid
          className="scvis"
          style={{
            marginTop: "2%",
            marginBottom: "10%",
            justifyContent: "center",
          }}
        >
          <Row
            style={{
              marginBottom: "0px",
              padding: "0px",
              position: "absolute",
              top: "5%",
            }}
          >
            <h1 className="videohead">Secure Compound Interest</h1>
          </Row>
          <Row
            style={{
              backgroundColor: this.props.agent.primaryColor,
              height: "2px",
              position: "absolute",
              top: "15%",
              width: "50vw",
            }}
          />
          <Row
            style={{
              marginBottom: "0px",
              padding: "0px",
              marginLeft: "auto",
              marginRight: "auto",
              position: "absolute",
              top: "18%",
            }}
          >
            <h2 className="videosubhead">The Simple Path To Full Retirement</h2>
            {/* <h3 className="videobody">WHAT YOU WILL LEARN</h3> */}
          </Row>
          <Col
            sm={0}
            xl={6}
            style={{ position: "absolute", top: "40%", textAlign: "left" }}
          ></Col>
          <Col
            sm={12}
            xl={6}
            style={{ position: "absolute", top: "30%", textAlign: "left" }}
          >
            <Row
              style={{
                marginBottom: "2%",
                padding: "0px",
              }}
            >
              <h3 className="bulletpoints">
                <FontAwesomeIcon
                  icon={faAngleDoubleDown}
                  style={{ color: "white", width: "10%" }}
                />
                The Myth of Downsizing
              </h3>
            </Row>
            <Row
              style={{
                marginBottom: "2%",
                padding: "0px",
              }}
            >
              <h3 className="bulletpoints">
                <FontAwesomeIcon
                  icon={faVideo}
                  style={{ color: "white", width: "10%" }}
                />
                The Phenomenon of Secure Compound Interest
              </h3>
            </Row>
            <Row
              style={{
                marginBottom: "2%",
                padding: "0px",
              }}
            >
              <h3 className="bulletpoints">
                <FontAwesomeIcon
                  icon={faLock}
                  style={{ color: "white", width: "10%" }}
                />
                Secure Leverage
              </h3>
            </Row>
            <Row
              style={{
                marginBottom: "2%",
                padding: "0px",
              }}
            >
              <h3 className="bulletpoints">
                <FontAwesomeIcon
                  icon={faDollarSign}
                  style={{ color: "white", width: "10%" }}
                />
                Achieving Full Retirement
              </h3>
            </Row>
            <Row
              style={{
                marginBottom: "2%",
                padding: "0px",
              }}
            >
              <h3 className="bulletpoints">
                <FontAwesomeIcon
                  icon={faHome}
                  style={{ color: "white", width: "10%" }}
                />
                Generational Wealth
              </h3>
            </Row>
          </Col>
        </Row>
        <Row fluid className="videobuttonrow">
          {/* <Col xs={1} sm={1} md={1} lg={1} xl={1} />
          <Col
            xs={10}
            sm={10}
            md={10}
            lg={10}
            xl={10}
            className="videobuttoncol"
          > */}
          <Button
            className="videobutton"
            style={{
              backgroundColor: this.props.agent.primaryColor,
              border: "none",
              boxShadow: "2px 2px rgba(0, 0, 0, 0.5)",
              color: `${this.props.agent.textColor}`,
              textShadow: "2px 2px rgba(0, 0, 0, 0.5)",
            }}
            href="/videoseries"
          >
            <h2 className="videobuttontext">Compound Interest Video Series</h2>
          </Button>
          {/* </Col>
          <Col xs={1} sm={1} md={1} lg={1} xl={1} /> */}
        </Row>
      </Container>
    );
  }
}
