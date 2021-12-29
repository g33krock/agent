import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { agentService } from "../../services/AgentService";

export class About extends Component {
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
    const agency = "Not Your Mother's Insurance Agency";
    return (
      <Container fluid>
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Row style={{ margin: "10px" }} key={ag.toString()}>
              <Col xs={2}>
              <Image src={ag.profilePic} roundedCircle fluid />
                <h5>
                  {ag.firstName} {ag.lastName}
                </h5>
              </Col>
              <Col xs={10}>
              <Container style={{backgroundColor: `${ag.primaryColor}`, borderRadius: "15px", minHeight: "300px", marginTop: "10px", marginBottom: "10px"}}>
                <h2 style={{color: `${ag.textColor}`}}>{ag.firstName} {ag.lastName}</h2>
                <br />
                <p style={{color: `${ag.textColor}`}}>{ag.bio}</p>
                <Image src={ag.familyPic} rounded fluid style={{paddingBottom: "10px", maxHeight: "600px", width: "90%"}} />
                </Container>
              </Col>
            </Row>
          ))}
      </Container>
    );
  }
}
