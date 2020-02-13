import {createStackNavigator} from 'react-navigation-stack';

import {SignIn3Container} from './screens/signIn3/signIn3.container';

import Home from './screens/';

export default SignIn03BlueprintNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    SignIn3: {screen: SignIn3Container},
  },
  {
    initialRouteName: 'Home',
  },
);
