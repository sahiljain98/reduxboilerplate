
import React from 'react';
import { View, Text, Button } from 'react-native';

import Actions from '../../resources/actions';

export default class SettingsScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Settings',
        };
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}
