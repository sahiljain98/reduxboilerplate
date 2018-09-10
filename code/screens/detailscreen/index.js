
import React from 'react';
import { View, Text, Button } from 'react-native';

import Actions from '../../resources/actions';

export default class DetailsScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'default'),
        };
    };

    render() {
        let items = Actions.getParams(this, 'itemId', 'nothing');
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{items.item}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => Actions.pushScreen(this, 'Details')}
                />
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({ title: 'Details' })}
                />
            </View>
        );
    }
}
