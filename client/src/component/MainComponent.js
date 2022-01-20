import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Client from 'shopify-buy';
import { agentService } from "../services/AgentService";
import { About } from "./About/AboutComponent";
import { AboutCurtis } from "./About/AboutCurtisComponent";
import { Webinar } from "./WebinarComponent";
import { Calculator } from "./CalculatorComponent";
import { Calendar } from "./CalendarComponent";
import { ContactUs } from "./ContactUsComponent";
import { FAQ } from "./FAQComponent";
import { Footer } from "./FooterComponent";
import { Header2 } from "./Header2Component";
import { Home } from "./HomeComponent";
import { VideoSeries } from "./VideoSeriesComponent";
import Shopify from "./Shopify/ShopifyComponent";
import SignIn from "./SignInComponent";

export function Main(props) {
  const agentId = 4;
  const agentObject = { agentID: agentId };
  const [agent] = useState(() => {
    const initialAgent = agentService.one(agentObject);
    return initialAgent;
  });
  const paidVideo = props.vids;
  const paidDeposit = props.deposit;
  console.log(paidVideo);
  console.log(paidDeposit);

  const client = Client.buildClient({
    domain: 'mpiunlimited.myshopify.com',
    storefrontAccessToken: '9ce898b59cd04f20cd3e147fbfa95af2',
  });
  return (
    <div style={{ minHeight: "100vh" }}>

      <Header2 agent={agent[0]} Id={agentId} style={{ marginLeft: "0px" }} />
      <Calendar agent={agent[0]} Id={agentId}></Calendar>
      <Row
        style={{
          marginRight: "0px",
          marginLeft: "0px",
          width: "100%",
          minHeight: "80vh",
          marginTop: "49px"
        }}
      >
        <Col style={{ paddingRight: "0px", paddingLeft: "0px" }}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<Home agent={agent[0]} Id={agentId} vids={paidVideo} deposit={paidDeposit} />}
              />
              <Route
                path="about"
                element={<About agent={agent[0]} Id={agentId} />}
              />
              <Route
                path="calendar"
                element={<Calendar agent={agent[0]} Id={agentId} />}
              />
              <Route
                path="calculator"
                element={<Calculator agent={agent[0]} Id={agentId} />}
              />
              <Route
                path="faq"
                element={<FAQ agent={agent[0]} Id={agentId} />}
              />
              <Route
                path="videoseries"
                element={<VideoSeries agent={agent[0]} Id={agentId} vids={paidVideo} deposit={paidDeposit} />}
              />
              <Route
                path="contactus"
                element={<ContactUs agent={agent[0]} Id={agentId} />}
              />
              <Route
                path="curtisray"
                element={<AboutCurtis agent={agent[0]} Id={agentId} />}
              />
              <Route
                path="webinarregistration"
                element={<Webinar agent={agent[0]} Id={agentId} />}
              />
              <Route
                path="shopify"
                element={<Shopify agent={agent[0]} Id={agentId} client={client}/>}
              />
              <Route
                path="signin"
                element={<SignIn agent={agent[0]} Id={agentId} client={client}/>}
              />
            </Routes>
          </BrowserRouter>
        </Col>
      </Row>
      <Footer agent={agent[0]} Id={agentId} style={{ marginLeft: "0px" }} />
    </div>
  );
}
