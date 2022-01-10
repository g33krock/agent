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
    render() {
      return (
        <Container className="homebg">
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Row style={{ margin: "0px" }} key={ag.toString()}>
              <Row style={{ marginTop: "10%"}}>
              <Col style={{ paddingLeft: "0px", paddingRight: "0px", backgroundColor: "rgb(0, 0, 0, 0.5)", borderRadius: "15px", marginLeft: "auto", marginRight: "auto" }}>
                {/* <Container style={{alignContent:'center'}}> */}

                  <img 
                  fluid
                  src={ag.logo}
                  alt={ag.agency}
                  // width="80%"
                  style={{marginTop: '1%', marginBottom: "0px", height: "20vh", maxWidth: "80vw", marginLeft: 'auto', marginRight: 'auto'}}/>
                  <h1
                    style={{
                      color: `${ag.textColor}`,
                      paddingTop: "0px",
                      marginTop: "0px",
                      textShadow: "1px 1px black"
                    }}
                  >
                    {ag.about}
                  </h1>
                  </Col>
                  </Row>
                  <Row>
                  <Col>
                  <h3
                    style={{
                      color: `${ag.textColor}`,
                      marginTop: "15%",
                      marginBottom: "5%",
                    }}
                  >
                    <strong style={{textShadow: "1px 1px black"}}>
                      SEE WHAT SECURE COMPOUND INTEREST CAN DO FOR YOU
                    </strong>
                  </h3>
                {/* </Container> */}
              </Col>
              </Row>
            </Row>
          ))}
        </Container>
      );
    }
  }