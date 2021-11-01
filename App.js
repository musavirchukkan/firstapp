import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./assets/background.jpeg')}
          style={styles.backgroundImage}>
          <Image source={require('./assets/logo.png')} style={styles.logo} />
          <Text style={styles.textView}>Welcome to the app!</Text>
          <TextInput
            style={styles.inputView}
            placeholder="Username"
            placeholderTextColor="grey"
            maxLength={10}
          />
          <TextInput
            style={styles.inputView}
            placeholder="Password"
            placeholderTextColor="grey"
            secureTextEntry={true}
          />
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#ffffff',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  textView: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  inputView: {
    width: '80%',
    height: 55,
    borderWidth: 1,
    borderColor: 'pink',
    marginTop: 50,
    paddingLeft: 10,
  },
  button: {
    width: '60%',
    height: 55,
    backgroundColor: 'pink',
    marginTop: 30,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'grey',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
