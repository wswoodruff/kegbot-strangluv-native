const React = require('react');
const { View, Text, Image, Button, StyleSheet } = require('react-native');

// Styles

const lStyles = require('./styles');

const {
    FlexScrollView,
    Title,
    SubTitle } = lStyles;

// Component

module.exports = class DriveView extends React.Component {

    onPressConnect() {
        alert('Connect!');
    }

    render() {

        return (
            <FlexScrollView>
                <Title>Drive Kegbot!</Title>
                <SubTitle>
                    Pushing connect will attempt to connect to kegbot via bluetooth.
                </SubTitle>
                <Button
                    onPress={this.onPressConnect}
                    title="Connect"
                    color="#2196F3"
                    accessibilityLabel="Start the game"
                />
            </FlexScrollView>
        );
    }
}
