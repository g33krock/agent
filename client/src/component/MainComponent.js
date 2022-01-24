import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Client from "shopify-buy";
import { agentService } from "../services/AgentService";
import { About } from "./About/AboutComponent";
import { AboutCurtis } from "./About/AboutCurtisComponent";
import { Webinar } from "./HomePage/WebinarComponent";
import { Calculator } from "./HomePage/CalculatorComponent";
import { Calendar } from "./CalendarComponent";
import { ContactUs } from "./ContactUsComponent";
import { FAQ } from "./FAQ/FAQComponent";
import { Footer } from "./FooterComponent";
import { Header2 } from "./Header2Component";
import { Home } from "./HomePage/HomeComponent";
import { VideoSeries } from "./VideoSeries/VideoSeriesComponent";
import Shopify from "./Shopify/ShopifyComponent";
import SignIn from "./SignInComponent";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { AuthProvider } from "../contexts/Auth";
import RecoverPassword from "./RecoverComponent";

export function Main(props, user) {
  const agentId = (Math.floor(Math.random() * 30));
  // const agentId = 17;
  const agentObject = { agentID: agentId };
  const [agents] = useState(() => {
    const allAgents = agentService.all();
    return allAgents;
  });
  const [agent] = useState(() => {
    const initialAgent = agentService.one(agentObject);
    return initialAgent;
  });
  const [recoveryToken, setRecoveryToken] = useState(null);
  const paidVideo = props.vids;
  const paidDeposit = props.deposit;
  console.log(paidVideo);
  console.log(paidDeposit);
  console.log(agents);

  const client = Client.buildClient({
    domain: "mpiunlimited.myshopify.com",
    storefrontAccessToken: "9ce898b59cd04f20cd3e147fbfa95af2",
  });
  return recoveryToken ? (
    <RecoverPassword
      token={recoveryToken}
      setRecoveryToken={setRecoveryToken}
      user={user}
    />
  ) : (
    <div style={{ minHeight: "100vh" }}>
      <Header2 agent={agent[0]} Id={agentId} style={{ marginLeft: "0px" }} />
      <Calendar agent={agent[0]} Id={agentId}></Calendar>
      <Row
        style={{
          marginRight: "0px",
          marginLeft: "0px",
          width: "100%",
          minHeight: "80vh",
          marginTop: "49px",
        }}
      >
        <Col style={{ paddingRight: "0px", paddingLeft: "0px" }}>
          <BrowserRouter>
            <AuthProvider>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home
                      agent={agent[0]}
                      Id={agentId}
                      vids={paidVideo}
                      deposit={paidDeposit}
                    />
                  }
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
                  element={
                    <VideoSeries
                      agent={agent[0]}
                      Id={agentId}
                      vids={paidVideo}
                      deposit={paidDeposit}
                    />
                  }
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
                  element={
                    <Shopify agent={agent[0]} Id={agentId} client={client} />
                  }
                />
                <Route
                  path="signin"
                  element={
                    <SignIn agent={agent[0]} Id={agentId} client={client} />
                  }
                />

                <Route
                  path="dashboard"
                  element={
                    <Dashboard agent={agent[0]} Id={agentId} client={client} />
                  }
                />
                <Route
                  path="login"
                  element={
                    <Login agent={agent[0]} Id={agentId} client={client} />
                  }
                />
                <Route
                  path="signup"
                  element={
                    <Signup agent={agent[0]} Id={agentId} client={client} />
                  }
                />
                <Route
                  path="recoverpassword"
                  element={
                    <RecoverPassword
                      agent={agent[0]}
                      Id={agentId}
                      client={client}
                      user={user}
                    />
                  }
                />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </Col>
      </Row>
      <Footer agent={agent[0]} Id={agentId} style={{ marginLeft: "0px" }} />

      <select name="chooseAgent" id="chooseAgent">
        {async (agents) => {
          return await agents.map((agen) => (
            <option value={agen.id}>
              {agen.firstName} {agen.lastName}
            </option>
          ));
        }}
      </select>
    </div>
  );
}
