import { createDrawerNavigator } from 'react-navigation';

import MyNotificationsScreen from '../../screens/drawer';

import BottomTabStack from '../bottom';


/**
 * for bottom tab with drawer
 */
export default createDrawerNavigator({
    Dashboard: BottomTabStack,
    Notifications: MyNotificationsScreen,
});
