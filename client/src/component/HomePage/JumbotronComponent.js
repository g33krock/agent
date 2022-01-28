import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { agentService } from "../../services/AgentService";

export class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: null,
    };
  }

  async componentDidMount() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
    console.log(agent);
    console.log(ID);
  }

  async changeState() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
    console.log(agent);
    console.log(ID);
  }

  render() {
    return (
      <>
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Container className="homebg" style={{backgroundImage: `url("${ag.backdrop}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', top: 0, left: 0}}>
            <Row style={{ margin: "0px" }} key={ag.toString()}>
              <Row style={{ marginTop: "5%" }}>
                <Col
                  style={{
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  {/* <Container style={{alignContent:'center'}}> */}

                  <img
                    fluid
                    src={ag.logo}
                    alt={ag.agency}
                    // width="80%"
                    style={{
                      marginTop: "1%",
                      marginBottom: "0px",
                      maxWidth: "80vw",
                      maxHeight: "30vh",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  <h1
                    className="slogan"
                    style={{
                      color: `white`,
                    }}
                  >
                    {/* YOUR FUTURE IS SECURE IN<br />FACTS NOT FORECASTS */}
                    {ag.slogan}
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  {/* <h3
                    style={{
                      color: `${ag.textColor}`,
                      marginTop: "15%",
                      marginBottom: "5%",
                    }}
                  >
                    <strong style={{textShadow: "1px 1px black"}}>
                      SEE WHAT SECURE COMPOUND INTEREST CAN DO FOR YOU
                    </strong>
                  </h3> */}
                  {/* </Container> */}
                </Col>
              </Row>
            </Row>
            </Container>
          ))}
      </>
    );
  }
}
