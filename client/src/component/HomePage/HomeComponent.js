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
    this.jumbotron = React.createRef();
    this.carousel = React.createRef();
    this.bottom = React.createRef();
    this.state = {
      agent: "",
      paidVideo: this.props.vids,
      paidDeposit: this.props.deposit,
    }
  }

  refreshState = () => {
    this.jumbotron.current.changeState();
    this.carousel.current.changeState();
    this.bottom.current.changeState()
  }


  async componentDidMount() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
    // this.setState({ paidVideo: this.props.vids });
    // this.setState({ paidDeposit: this.props.deposit });
  }

  async updateState() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
    this.refreshState()
  }



  render() {
    return (
      <Container fluid style={{ paddingLeft: "0px", paddingRight: "0px", marginTop: "0px"}}>
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Row style={{ margin: "0px 0px 0px 0px" }} key={ag.toString()}>
              <Jumbotron agent={ag} Id={ag.id} ref={this.jumbotron}/>
              <Calculator agent={ag} />
              <WhatIsMPI agent={ag} Id={ag.id} vids={this.props.vids} deposit={this.props.deposit}/>
              <Webinar agent={ag} Id={ag.id}/>
              <AgentCarousel agent={ag} Id={ag.id} ref={this.carousel}/>
              <Testimonials agent={ag} Id={ag.id} />
              <Bottom agent={ag} Id={ag.id} style={{width: "100%"}} ref={this.bottom}/>
            </Row>
          ))}
      </Container>
    );
  }
}
