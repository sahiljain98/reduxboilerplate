
import React from 'react';
import { View, Text, Button } from 'react-native';

import Actions from '../../resources/actions';


import * as userActions from '../../redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: "Login"
    };

    state = {
        test: 'hello world'
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Login Screen</Text>
                <Button
                    title="Go to Home"
                    onPress={() => Actions.navigateScreen(this, 'Dashboard',)}
                />
            </View>
        );
    }
    componentDidMount(){
        let { actions } = this.props;
        actions.appTimelineTheme('default');

    }
}


function mapStateToProps(state, ownProps) {
    return {
      service: state.service
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(userActions, dispatch)
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
