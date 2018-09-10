
import React from 'react';
import { View, Text, Button } from 'react-native';

import Actions from '../../resources/actions';

import HeaderTitleIcon from '../../components/headerTitleIcon';

export default class Notifications extends React.Component {

    state = {
        test: 'hello world'
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Notification Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => Actions.navigateScreen(this, 'Details', { itemId: { item: 86 }, title: 'Yoyo' })}
                />
            </View>
        );
    }
}
