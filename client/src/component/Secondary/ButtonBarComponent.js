import React, { Component } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { agentService } from "../../services/AgentService";

export class ButtonBar extends Component {
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
      <div>
        <Container fluid style={{ flexDirection: "row" }}>
          <Row
            className="justify-content-md-center"
            style={{ marginBottom: "25px", marginTop: "25px" }}
          >

              <Button
                style={{
                  // backgroundColor: `${this.props.agent.secondaryColor}`,
                  backgroundColor: "black",
                  width: "300px",
                  border: "none",
                  boxShadow: "2px 2px rgba(0, 0, 0, 0.5)",
                  color: `${this.props.agent.textColor}`,
                  marginBottom: "5px",
                  textShadow: "2px 2px rgba(0, 0, 0, 0.5)",
                }}
                href="https://compoundinterest.com/main-page"
              >
                <h2>LEARN MORE</h2>
              </Button>{" "}

          </Row>
        </Container>
      </div>
    );
  }
}
