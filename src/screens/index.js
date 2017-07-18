
const Counter = require('./counter');
const Home = require('./home');
const Beer = require('./beer');


// This is our main route config,
// to have a single place to collect
// our screens and configure their
// relationships via other navigators

module.exports = (store) => {

    return {
        routeConfig: {
            Beer,
            Counter
        },

        initialRouteName: 'Beer',

        tabBarOptions: {
            bottomNavigationOptions: {
                labelColor: 'white',
                rippleColor: 'white',
                tabs: {
                    Beer: {
                        barBackgroundColor: '#37474F'
                    },
                    Counter: {
                        barBackgroundColor: '#e6158d'
                    }
                }
            }
        }
    };
};
