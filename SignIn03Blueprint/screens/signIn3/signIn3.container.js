import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {SignIn3} from './signIn3.component';
import {connect} from 'react-redux';
import * as emailAuthActions from '../../redux/actions';

export class _SignIn3Container extends React.Component {
  static navigationOptions = {
    header: null,
  };
  navigationKey = 'SignIn3Container';

  onSignInPress = data => {
    this.props.navigation.goBack();
  };

  onSignUpPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Sign Up 3',
    });
  };

  onForgotPasswordPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Forgot Password',
    });
  };

  render() {
    return (
      <SignIn3
        onSignInPress={this.props.login}
        onSignUpPress={this.onSignUpPress}
        onForgotPasswordPress={this.onForgotPasswordPress}   
        errorMsg={this.props.signInErrors}

      />
    );
  }
}

const mapStateToProps = state => ({
  signInErrors: state.SignIn03Blueprint.errors.SignIn,
});

const mapDispatchToProps = {
  login: emailAuthActions.login
}

export const SignIn3Container =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_SignIn3Container);