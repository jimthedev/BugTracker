import React, { Component } from "react";
import { Alert, Text } from "react-native";
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
export default class SignUpScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Sign up</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => {this.props.history.push('/login')}}>
              <Text>Log in</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Name" />
            </Item>
            <Item>
              <Input placeholder="Postal code" />
            </Item>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
            <Button full onPress={() => {
              Alert.alert(
                'Check your email',
                'We would normally send you a verification email here but since this is a demo, you can login without a username or password. ',
                [
                  {
                    text: 'Go to Log In',
                    onPress: () => this.props.history.push('/login')
                  }
                ]
              )}}>
              <Text style={{color: '#fff'}}>Sign up</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
