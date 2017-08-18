import React, { Component } from "react";

import { StyleSheet, Text, View } from "react-native";
import {
  Button,
  Container,
  Header,
  Content,
  Form,
  Icon,
  Item,
  Input,
  Left,
  Body,
  Right,
  Title,
  Footer,
  FooterTab
} from "native-base";

import { TabList, TabPanels, TabPanel, Tab, Tabs } from "./Tabs";
import { Route, Link } from "react-router-native";

const styles = {
  disabledTab: {
    // borderLeftColor: "#ccc",
    // borderLeftWidth: 4
  },
  activeTab: {
    // borderLeftColor: "#fc0",
    // borderLeftWidth: 4
  },
  tab: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center"
  }
};
const HomePanel = props =>
  <TabPanel ContainerComponent={Container}>
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Home</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => props.history.push("/login")}>
            <Text>Log out</Text>
          </Button>
        </Right>
      </Header>
      <Content
        style={{
          backgroundColor: "#fe6"
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Icon name="home" style={{ fontSize: 100, marginTop: 50 }} />
          <Text>You have arrived at home!</Text>
        </View>
      </Content>
    </Container>
  </TabPanel>;

const BugsPanel = props =>
  <TabPanel ContainerComponent={Container}>
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Bugs</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => props.history.push("/login")}>
            <Text>Log out</Text>
          </Button>
        </Right>
      </Header>
      <Content
        style={{
          backgroundColor: "#0fc"
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Icon name="bug" style={{ fontSize: 100, marginTop: 50 }} />
          <Text>You have arrived at bugs!</Text>
        </View>
      </Content>
    </Container>
  </TabPanel>;

const ProfilePanel = props =>
  <TabPanel ContainerComponent={Container}>
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Profile</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => props.history.push("/login")}>
            <Text>Log out</Text>
          </Button>
        </Right>
      </Header>
      <Content
        style={{
          backgroundColor: "#f0c"
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Icon name="contact" style={{ fontSize: 100, marginTop: 50 }} />
          <Text>You have arrived at profile!</Text>
        </View>
      </Content>
    </Container>
  </TabPanel>;

export default class SecureScreen extends Component {
  render() {
    return (
      <Tabs
        initialIndex="0"
        ContainerComponent={Container}
        LinkComponent={Link}
        FooterComponent={Footer}
        FooterTabComponent={FooterTab}
      >
        <TabPanels>
          <Route path="/secure/home" component={HomePanel} />
          <Route path="/secure/bugs" component={BugsPanel} />
          <Route path="/secure/profile" component={ProfilePanel} />
        </TabPanels>
        <TabList>
          <Tab
            route="/secure/home"
            FooterTabComponent={FooterTab}
            LinkComponent={Link}
          >
            <Route path={"/secure/home"}>
              {({ match }) =>
                <Container style={styles.tab}>
                  <Icon
                    name="home"
                    active={!!match}
                    style={{ textAlign: "center" }}
                  />
                  <Text style={{ fontSize: 9, textAlign: "center" }}>Home</Text>
                </Container>}
            </Route>
          </Tab>
          <Tab route="/secure/bugs">
            <Route path={"/secure/bugs"}>
              {({ match }) =>
                <Container style={styles.tab}>
                  <Icon
                    name="pin"
                    active={!!match}
                    style={{ textAlign: "center" }}
                  />
                  <Text style={{ fontSize: 9, textAlign: "center" }}>Bugs</Text>
                </Container>}
            </Route>
          </Tab>
          <Tab
            route="/secure/profile"
            LinkComponent={Link}
          >
            <Route path={"/secure/profile"}>
              {({ match }) =>
                <Container style={styles.tab}>
                  <Icon
                    name="contact"
                    active={!!match}
                    style={{ textAlign: "center" }}
                  />
                  <Text style={{ fontSize: 9, textAlign: "center" }}>
                    Profile
                  </Text>
                </Container>}
            </Route>
          </Tab>
        </TabList>
      </Tabs>
    );
  }
}
