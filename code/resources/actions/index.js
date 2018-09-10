
/**
 * navigate screen for single time only
 * @param {*} ref reference
 * @param {*} screenName name of the screen
 * @param {*} props props
 */
navigateScreen = (ref, screenName, props) =>
    ref.props.navigation.navigate(screenName, props);


/**
 * navigate screen for multiple times as called
 * @param {*} ref reference
 * @param {*} screenName name of the screen
 * @param {*} props props
 */
pushScreen = (ref, screenName, props) =>
    ref.props.navigation.push(screenName, props);


/**
 * pop to back screen
 * @param {*} ref reference
 */
popScreen = (ref, ) =>
    ref.props.navigation.goBack();


/**
 * pop to root screen
 * @param {*} ref reference
 */
popToRootScreen = (ref, ) =>
    ref.props.navigation.popToTop();


/**
 * get params from reference
 * @param {*} ref reference
 * @param {*} paramName parameter name
 * @param {*} defaultValue default value is parameter not found
 */
getParams = (ref, paramName, defaultValue) =>
    ref.props.navigation.getParam(paramName, defaultValue);


/**
 * set params from reference
 * @param {*} ref reference
 * @param {*} paramName parameter name
 * @param {*} paramValue parameter value
 */
setParams = (ref, paramName, paramValue) =>
    ref.props.navigation.setParams(paramName, defaultValue);


module.exports = {
    navigateScreen: navigateScreen,
    pushScreen: pushScreen,
    popScreen: popScreen,
    popToRootScreen: popToRootScreen,
    getParams: getParams,
    setParams: setParams
}    