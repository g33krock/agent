import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { agentService } from "../../services/AgentService";

export class AboutCurtis extends Component {
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
    return (
      <Container fluid>
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Row style={{ margin: "10px" }} key={ag.toString()}>
              <Col xs={2}>
              <Image src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/images/CurtisRay.png" roundedCircle fluid />
                <h5>
                  Curtis Ray
                </h5>
              </Col>
              <Col xs={10}>
              <Container style={{backgroundColor: `${ag.primaryColor}`, borderRadius: "15px", minHeight: "300px", marginTop: "10px", marginBottom: "10px"}}>
                <h2 style={{color: `${ag.textColor}`}}>Curtis Ray</h2>
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