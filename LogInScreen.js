import React, { Component } from "react";
import { Text } from "react-native";
import {
  Button,
  Container,
  Header,
  Content,
  Left,
  Right,
  Body,
  Title,
  Form,
  Item,
  Input
} from "native-base";
export default class LogInScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Log in</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => { this.props.history.push('/') }}>
              <Text>Sign up</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
            <Button full onPress={() => { this.props.history.push('/secure/home')}}>
              <Text style={{color: '#fff'}}>Log in</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
