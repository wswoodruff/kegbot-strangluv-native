
const { StyleSheet } = require('react-native');
const { default: styled } = require('styled-components/native');
const gStyles = require('styles');

const {
    ScrollView,
    Text } = gStyles;

module.exports = {

    FlexScrollView: ScrollView.extend`
        flex: 1;
        padding: 10px;
    `,
    BeerHeader: styled.View`
        flex: 1;
        flex-direction: row;
    `,
    BeerInfoContainer: styled.View`
        flex: 2;
    `,
    BeerName: Text.extend`
        font-size: 36px;
        font-weight: bold;
        color: black;
    `,
    BeerStatsContainer: styled.View`
        flex: 1;
        flex-direction: row;
        margin-top: 35px;
    `,
    BeerStatContianer: styled.View`
        flex: 2;
    `,
    BeerStat: Text.extend`
        margin: 10px;
        font-size: 18px;
    `,
    BeerImageContainer: styled.View`
        flex: 2;
        justify-content: flex-start;
        align-items: flex-end;
    `,
    BeerImage: styled.Image`
        width: 150px;
        height: 150px;
        border-color: black;
        border-width: 1;
        top: 10px;
    `,
    BeerDescriptionContainer: styled.View`
        flex: 2;
        height: 200px;
    `,
    BeerDescription: styled.Text`
        margin: 10px;
        font-size: 18px;
    `
}
