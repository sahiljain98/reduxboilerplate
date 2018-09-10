import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import LoginScreen from '../screens/loginscreen';

import ModelStack from './modal';
import AddScrrenToStack from './additionalScreens';


const MainStack = createStackNavigator(
    {
        Model: ModelStack,
        AddScrren: AddScrrenToStack
    },
    {
        headerMode: 'none',
    }
);



export default createSwitchNavigator(
    {
        Login: LoginScreen, // This screen renders a navigator!
        Dashboard: MainStack
    }
);