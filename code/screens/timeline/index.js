
import React from 'react';
import { View, Text, Button } from 'react-native';

import Actions from '../../resources/actions';

import HeaderTitleIcon from '../../components/headerTitleIcon';

export default class Timeline extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <HeaderTitleIcon />,
            headerRight: <Button
                onPress={() => navigation.navigate('MyModal')}
                title="Info"
                color="green"
            />,
            headerLeft: <Button
                onPress={() => navigation.navigate('Login')}
                title="Logout"
                color="red"
            />
        };
    };

    state = {
        test: 'hello world'
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Timeline Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => Actions.navigateScreen(this, 'Details', { itemId: { item: 86 }, title: 'Yoyo' })}
                />
            </View>
        );
    }
}
