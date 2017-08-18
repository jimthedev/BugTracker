import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Root} from 'native-base';
import { NativeRouter, Route, Link } from 'react-router-native'
import SignUpScreen from './SignUpScreen';
import LogInScreen from './LogInScreen';
import SecureScreen from './SecureScreen';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Root>
          <Route exact path="/" component={SignUpScreen} />
          <Route path="/login" component={LogInScreen} />
          <Route path="/secure" component={SecureScreen} />
        </Root>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
