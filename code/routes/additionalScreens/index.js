import { createStackNavigator } from 'react-navigation';

import DetailsScreen from '../../screens/detailscreen';
import SettingScreen from '../../screens/settingScreen';

import { navigationStyle } from '../../resources/appConfig';

export default createStackNavigator(
    {
        Settings: SettingScreen,
        Details: DetailsScreen,
    }, {
        navigationOptions: navigationStyle
    }
);