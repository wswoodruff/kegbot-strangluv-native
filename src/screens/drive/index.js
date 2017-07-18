const React = require('react');
const { default: MaterialIcon } = require('components/MaterialIcon');

module.exports = {

    screen: require('./components/DriveView'),
    path: 'drive',
    navigationOptions: {
        title: 'Drive',
        drawerLabel: 'Drive',
        tabBarIcon: () => (
            <MaterialIcon
                size={24}
                color='white'
                name='directions-car'
            />
        )
    }
};
