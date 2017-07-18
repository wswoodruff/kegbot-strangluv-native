const React = require('react');
const T = require('prop-types');
const { default: Icon } = require('react-native-vector-icons/MaterialIcons');

// Styles
const { default: styled } = require('styled-components/native');

// Component

exports.default = class MaterialIcon extends React.PureComponent {

    render() {

        console.log(require('react-native-vector-icons/MaterialIcons'));

        return (
            <Icon {...this.props} />
        );
    }
}

// Custom styled-component

exports.styled = styled(Icon);
