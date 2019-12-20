import React from 'react';
import {View} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from 'react-native-ui-kitten';
import {Button, Text} from 'react-native-ui-kitten';
import {SignInForm2} from '../../components/auth';
import {
  ScrollableAvoidKeyboard,
  ImageOverlay,
  textStyle,
} from '../../components/common';

const imageSignIn3Bg = require('../../assets/images/image-background-auth-3.jpg');

class SignIn3Component extends React.Component {
  state = {
    username: '',
    password: '',
  };

  onUsernameInputTextChange = username => {
    this.setState({username});
  };

  onPasswordInputTextChange = password => {
    this.setState({password});
  };

  backgroundImage = imageSignIn3Bg;

  onSignInButtonPress = () => {
    this.props.onSignInPress({
      email: this.state.username,
      password: this.state.password,
    });
  };

  onSignUpButtonPress = () => {
    this.props.onSignUpPress();
  };

  onForgotPasswordButtonPress = () => {
    this.props.onForgotPasswordPress();
  };

  onFormDataChange = formData => {
    this.setState({formData});
  };

  render() {
    const {themedStyle} = this.props;

    return (
      <ScrollableAvoidKeyboard>
        <ImageOverlay
          style={themedStyle.container}
          source={this.backgroundImage}>
          <View style={themedStyle.headerContainer}>
            <Text style={themedStyle.helloLabel} category="h1">
              Hello
            </Text>
            <Text style={themedStyle.signInLabel} category="s1">
              Sign in to your account
            </Text>
          </View>
          {this.props.errorMsg && (
            <View style={themedStyle.msgContainer}>
              <Text style={{color: 'red'}}>{this.props.errorMsg}</Text>
            </View>
          )}
          <SignInForm2
            style={themedStyle.formContainer}
            onForgotPasswordPress={this.onForgotPasswordButtonPress}
            //onDataChange={this.onFormDataChange}
            onUsernameInputTextChange={this.onUsernameInputTextChange}
            onPasswordInputTextChange={this.onPasswordInputTextChange}
            email={this.state.username}
            password={this.state.password}
          />
          <Button
            style={themedStyle.signInButton}
            //textStyle={textStyle.button}
            size="giant"
            //disabled={!this.state.formData}
            onPress={this.onSignInButtonPress}>
            SIGN IN
          </Button>
          <Button
            style={themedStyle.signUpButton}
            textStyle={themedStyle.signUpText}
            appearance="ghost"
            activeOpacity={0.75}
            onPress={this.onSignUpButtonPress}>
            Don't have an account? Sign Up
          </Button>
        </ImageOverlay>
      </ScrollableAvoidKeyboard>
    );
  }
}

export const SignIn3 = withStyles(SignIn3Component, theme => ({
  container: {
    flex: 1,
  },
  headerContainer: {
    minHeight: 216,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  helloLabel: {
    color: 'white',
    ...textStyle.headline,
  },
  signInLabel: {
    marginTop: 16,
    color: 'white',
    ...textStyle.subtitle,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  signUpButton: {
    marginVertical: 12,
  },
  signUpText: {
    color: 'white',
    ...textStyle.subtitle,
  },
  msgContainer: {
    borderWidth: 2,
    borderColor: "#e3e3e3",
    padding: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  }
}));
