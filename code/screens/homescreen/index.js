
import React from 'react';
import { View, Text, Button } from 'react-native';

import Actions from '../../resources/actions';

import HeaderTitleIcon from '../../components/headerTitleIcon';
import DrawerIcon from '../../resources/images/sahil.png'

export default class HomeScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title:"Home",
            // headerTitle: <HeaderTitleIcon />,
            headerRight: <Button
                onPress={() => navigation.navigate('MyModal')}
                title="Info"
                color="green"
            />,
            headerLeft: <Button
                onPress={() => navigation.openDrawer()  }
                title="Drawer"
                color="green"
            />,
            drawerLabel: 'Notifications',
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={DrawerIcon}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
        };
    };

    state = {
        test: 'hello world'
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => Actions.navigateScreen(this, 'Details', { itemId: { item: 86 }, title: 'Yoyo' })}
                />
            </View>
        );
    }
}
