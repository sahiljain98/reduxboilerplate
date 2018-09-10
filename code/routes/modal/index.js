import { createStackNavigator} from 'react-navigation';

import ModalScreen from '../../screens/modalScreen';

import BottomDrawerStack from '../drawer';

/**
 * for system model with stack
 */
export default createStackNavigator(
    {
        Bottom: BottomDrawerStack,
        MyModal: ModalScreen
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);
