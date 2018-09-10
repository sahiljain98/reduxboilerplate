import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../../screens/homescreen';

import TimelineScreen from '../../screens/timeline';
import ChatScreen from '../../screens/chat';
import PostSelectorScreen from '../../screens/postSelector';
import NotificaitonScreen from '../../screens/notifications';
import MoreGridScreen from '../../screens/moreGrid';

import { navigationStyle } from '../../resources/appConfig';


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
export default createBottomTabNavigator(
    {
        Home: HomeStack,
        Chat: ChatScreen,
        PostSelector: PostSelectorScreen,
        Notificaiton: NotificaitonScreen,
        MoreGrid: MoreGridScreen
    }
);
