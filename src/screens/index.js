
const Counter = require('./counter');
const Home = require('./home');
const Beer = require('./beer');
const Drive = require('./drive');
const Games = require('./games');

// This is our main route config,
// to have a single place to collect
// our screens and configure their
// relationships via other navigators

module.exports = (store) => {

    return {
        routeConfig: {
            Beer,
            Drive,
            Games
        },

        initialRouteName: 'Beer',

        tabBarOptions: {
            bottomNavigationOptions: {
                labelColor: 'white',
                rippleColor: 'white',
                tabs: {
                    Beer: {
                        barBackgroundColor: '#F9A825'
                    },
                    Drive: {
                        barBackgroundColor: '#e6158d'
                    },
                    Games: {
                        barBackgroundColor: '#4CAF50'
                    }
                }
            }
        }
    };
};
