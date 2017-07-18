const React = require('react');
const { default: MaterialIcon } = require('components/MaterialIcon');

module.exports = {

    screen: require('./components/BeerView'),
    path: 'beer',
    navigationOptions: {
        title: 'Beer',
        drawerLabel: 'Beer',
        tabBarIcon: () => (
            <MaterialIcon
                size={24}
                color='white'
                name='add'
            />
        )
    }
};
