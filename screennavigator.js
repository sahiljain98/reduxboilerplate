import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import HomeScreen from './code/screens/homescreen';
import DetailsScreen from './code/screens/detailscreen';
import ModalScreen from './code/screens/modalScreen';
import SettingScreen from './code/screens/settingScreen';
import MyNotificationsScreen from './code/screens/drawer';


import LoginScreen from './code/screens/loginscreen';

import TimelineScreen from './code/screens/timeline';
import ChatScreen from './code/screens/chat';
import PostSelectorScreen from './code/screens/postSelector';
import NotificaitonScreen from './code/screens/notifications';
import MoreGridScreen from './code/screens/moreGrid';

import { navigationStyle } from './code/resources/appConfig';



const HomeStack = createStackNavigator(
    {
        Timeline: HomeScreen,
    },
    {
        initialRouteName: 'Timeline',
        navigationOptions: navigationStyle
    }
);


/**
 * for bottom tab
 */
const BottomTabStack = createBottomTabNavigator(
    {
        Home: HomeStack,
        Chat: ChatScreen,
        PostSelector: PostSelectorScreen,
        Notificaiton: NotificaitonScreen,
        MoreGrid: MoreGridScreen
    }
);

/**
 * for bottom tab with drawer
 */
const BottomDrawerStack = createDrawerNavigator({
    Dashboard: BottomTabStack,
    Notifications: MyNotificationsScreen,
});


/**
 * for system model with stack
 */
const ModelStack = createStackNavigator(
    {
        Bottom: BottomDrawerStack,
        MyModal: ModalScreen
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

const AddScrrenToStack = createStackNavigator(
    {
        Details: DetailsScreen,
        Settings: SettingScreen,
    }
);

const MainStack = createStackNavigator(
    {
        Model: ModelStack,
        AddScrren:AddScrrenToStack
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