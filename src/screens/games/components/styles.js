
const { default: styled } = require('styled-components/native');
const gStyles = require('styles');

const { ScrollView } = gStyles;

module.exports = {
    FlexScrollView: ScrollView.extend`
        flex: 1;
        margin: 10px;
    `,
    Title: styled.Text`
        font-size: 36px
        margin-bottom: 50px
        color: black;
    `,
    GameContainer: styled.View`

    `,
    SubTitle: styled.Text`
        font-size: 18px;
        margin-bottom: 100px;
    `
};
