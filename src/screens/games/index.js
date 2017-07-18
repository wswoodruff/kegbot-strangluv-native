const React = require('react');
const { default: MaterialIcon } = require('components/MaterialIcon');

module.exports = {

    screen: require('./components/GameListView'),
    path: 'games',
    navigationOptions: {
        title: 'Games',
        drawerLabel: 'Games',
        tabBarIcon: () => (
            <MaterialIcon
                size={24}
                color='white'
                name='videogame-asset'
            />
        )
    }
};
