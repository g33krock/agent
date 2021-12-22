import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { agentService } from "../services/AgentService";
import { ButtonBar } from "./ButtonBarComponent";
import { Calculator } from "./CalculatorComponent";
import { AgentCarousel } from "./CarouselComponent";
import { Webinar } from "./WebinarComponent";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: this.props.agent,
    }
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
      <Container fluid style={{ paddingLeft: "0px", paddingRight: "0px" }}>
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Row style={{ margin: "0px" }} key={ag.toString()}>
              <Col style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                <Container>

                  <img 
                  src={ag.logo}
                  alt={ag.agency}
                  width="100%"
                  style={{marginBottom: "0px", marginTop: "15%"}}/>
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
                  <h3
                    style={{
                      color: `${ag.textColor}`,
                      marginTop: "20%",
                      marginBottom: "0%",
                    }}
                  >
                    <strong style={{textShadow: "1px 1px black"}}>
                      SEE WHAT SECURE COMPOUND INTEREST CAN DO FOR YOU
                    </strong>
                  </h3>
                </Container>
              </Col>
              <ButtonBar agent={ag} Id={ag.id} />
              <AgentCarousel agent={ag} Id={ag.id} />
              <Calculator agent={ag} />
              <Webinar agent={ag} Id={ag.id} />
            </Row>
          ))}
      </Container>
    );
  }
}
