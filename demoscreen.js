import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import LoginScreen from './code/screens/loginscreen';
import HomeScreen from './code/screens/homescreen';
import DetailsScreen from './code/screens/detailscreen';
import ModalScreen from './code/screens/modalScreen';
import SettingScreen from './code/screens/settingScreen';

import { navigationStyle } from './code/resources/appConfig';

const MainStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
        navigationOptions: navigationStyle
    }
);

const BottomTabStack = createBottomTabNavigator(
    {
        Main: MainStack,
        Settings: SettingScreen,
    }
);

const ModelStack = createStackNavigator(
    {
        Bottom: BottomTabStack,
        MyModal: ModalScreen
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

export default createSwitchNavigator(
    {
        Login: LoginScreen, // This screen renders a navigator!
        Dashboard: ModelStack,
    },
    {
        initialRouteName: 'Login',
        navigationOptions: navigationStyle
    }
);