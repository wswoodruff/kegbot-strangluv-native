const React = require('react');
const { MKButton } = require('react-native-material-kit');
const T = require('prop-types');
const { default: styled } = require('styled-components/native');


const HomeBtn = MKButton.coloredButton()
    .withText('Home')
    .build();

const CounterBtn = MKButton.coloredButton()
    .withText('Counter')
    .build();

// Styles

const gStyles = require('styles'); // global styles
const lStyles = require('./styles'); // local styles

const {
    ScrollView,
    Title } = gStyles;

const {
    Duck,
    InheritStylesText } = lStyles;

const HomeBtnContainer = styled.View`
    margin-bottom: 10px;
`

// Component

module.exports = class HomeView extends React.PureComponent {

    static propTypes = {
        navigation: T.object.isRequired
    };

    constructor() {

        super();

        this.navigate = this._navigate.bind(this);
    }

    _navigate(navigation, path) {

        return () => {

            navigation.navigate(path);
        }
    }

    render() {

        const { navigation, style } = this.props;

        return (

            <ScrollView>

                <HomeBtnContainer>
                    <HomeBtn
                        onPress={() => (navigation.navigate('Home'))}
                    />
                </HomeBtnContainer>
                <CounterBtn
                    onPress={() => (navigation.navigate('Counter'))}
                />

                <Title> Welcome! </Title>

                <Duck
                    source={require('../assets/duck.jpg')}
                />
            </ScrollView>
        );
    }
}
