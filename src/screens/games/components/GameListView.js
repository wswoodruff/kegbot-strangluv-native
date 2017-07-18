const React = require('react');
const { View, Text, Image, Button, StyleSheet } = require('react-native');
const styles = require('./styles');

const Icon = require('react-native-vector-icons/MaterialIcons').default;

// Styles

const lStyles = require('./styles');

const {
    FlexScrollView,
    Title,
    GameContainer,
    SubTitle } = lStyles;


// Component

module.exports = class GameListView extends React.Component {

    onPressStart() {
        alert('Start!');
    }

    render() {

        return (
            <FlexScrollView>
                <Title>Select a game</Title>
                <GameContainer>

                </GameContainer>
                <SubTitle>
                    Can you find the differences in the photos???????
                </SubTitle>
                <Button
                    onPress={this.onPressStart}
                    title="Start"
                    color="#2196F3"
                    accessibilityLabel="Start the game"
                />
            </FlexScrollView>
        );
    }
}
