import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { agentService } from "../services/AgentService";



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
          <Container fluid style={{ height:"200px", position: "relative"}}>
            <Row>
              {this.state.agent && this.state.agent.map(ag => (
                <h1 key={ag.toString()} style={{position:"absolute", color:"whitesmoke", top:"20%", fontSize:"500%", textShadow:"2px 2px black"}}>{ag.agency}</h1>
      ))}
            </Row>
          </Container>
      );
    }
  }