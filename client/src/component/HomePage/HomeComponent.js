import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { agentService } from "../../services/AgentService";
import { Bottom } from "./Bottom/BottomComponent";
import { Calculator } from "./CalculatorComponent";
import { AgentCarousel } from "./MeetAdvisor/CarouselComponent";
import { Jumbotron } from "./JumbotronComponent";
import { Testimonials } from "./TestimonialsComponent";
import { Webinar } from "./WebinarComponent";
import { WhatIsMPI } from "./WhatIsMPI/WhatIsMPIComponent";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: this.props.agent,
      paidVideo: this.props.vids,
      paidDeposit: this.props.deposit,
    }
  }

  async componentDidMount() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
    console.log(this.props.vids)
  }



  render() {
    // const agency = "Not Your Mother's Insurance Agency";
    return (
      <Container fluid style={{ paddingLeft: "0px", paddingRight: "0px", marginTop: "0px"}}>
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Row style={{ margin: "0px 0px 0px 0px" }} key={ag.toString()}>
              <Jumbotron agent={ag} Id={ag.id} />
              <WhatIsMPI agent={ag} Id={ag.id} vids={this.props.vids} deposit={this.props.deposit}/>
              <Webinar agent={ag} Id={ag.id} />
              <Calculator agent={ag} />
              <AgentCarousel agent={ag} Id={ag.id} />
              <Testimonials agent={ag} Id={ag.id} />
              <Bottom agent={ag} Id={ag.id} style={{width: "100%"}}/>
            </Row>
          ))}
      </Container>
    );
  }
}
