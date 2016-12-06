/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
} from 'react-native';

const onButtonPress = () => {
  Alert.alert('Botão foi pressionado!');
};

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
           QueroCarona
        </Text>
        <Text style={styles.instructions}>
          Aplicativo destinado a caronas
          para alunos da universidade </Text>

        <Text>{'\n'}</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        />
        <Button
          onPress={onButtonPress}
          title="Logar"
          color="#841584"
          accessibilityLabel="Aperte para logar"
        />

        <Text>{'\n'}</Text>

        <Button
          onPress={onButtonPress}
          title="Cadastrar"
          color="#841584"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0ffff',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});



AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
