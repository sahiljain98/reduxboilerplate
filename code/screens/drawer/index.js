
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

import Actions from '../../resources/actions';

import HeaderTitleIcon from '../../components/headerTitleIcon';
import DrawerIcon from '../../resources/images/sahil.png';


export default class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={DrawerIcon}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };
    
    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});