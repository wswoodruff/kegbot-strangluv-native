const React = require('react');

const { StackNavigator } = require('react-navigation');
const MainTabs = require('./MainTabs');

// Styles

const gStyles = require('styles');
const { styled: MaterialIcon } = require('components/MaterialIcon');

const StyledMaterialIcon = MaterialIcon.attrs({
    size: 26
})`
    padding-right: 10px;
`;

// Component
module.exports = (store, screens) => {

    return StackNavigator(
        {
            MainTabs: { screen: MainTabs(store, screens) }
        },
        {
            initialRouteName: 'MainTabs',
            tabBarPosition: 'bottom',
            tabBarOptions: screens.tabBarOptions,
            headerMode: 'screen',
            navigationOptions: ({ navigation }) => {
                return {
                    headerRight: (
                        <StyledMaterialIcon
                            name="menu"
                            onPress={() => navigation.navigate('DrawerOpen')}
                        />
                    )
                }
            }
        }
    );
};
