const React = require('react');
const { View, Text, Image, StyleSheet } = require('react-native');
const Icon = require('react-native-vector-icons/FontAwesome').default;

// Styles

const { default: lStyles } = require('./styles');

const {
    FlexScrollView,

    BeerHeader,
    BeerInfoContainer,
    BeerName,
    BeerStatsContainer,
    BeerStatContianer,
    BeerStat,
    BeerImageContainer,
    BeerImage,

    BeerDescriptionContainer,
    BeerDescription } = lStyles;

// Component

class BeerView extends React.Component {

    static propTypes = {
        navigation: React.PropTypes.object.isRequired
    };

    render() {

        const { navigation } = this.props;

        return (

            <FlexScrollView>
                <BeerHeader>

                    <BeerInfoContainer>

                        <BeerName>Epiphany</BeerName>

                        <BeerStatsContainer>
                            <BeerStatContianer>
                                <BeerStat>8%</BeerStat>
                            </BeerStatContianer>
                            <BeerStatContianer>
                                <BeerStat>85 IBUs</BeerStat>
                            </BeerStatContianer>
                        </BeerStatsContainer>

                    </BeerInfoContainer>

                    <BeerImageContainer>
                        <BeerImage
                            source={require('../assets/epiphany-logo.jpg')}
                            resizeMode="cover"
                        />
                    </BeerImageContainer>

                </BeerHeader>

                <BeerDescriptionContainer>
                    <BeerDescription>
                        We indulged in our desire to create an IPA that personifies the vivid flavors that can be coaxed from the hop cone, painted on a canvas of soft malt that allows the flavors to shine through.  Extensively hopped in the kettle and in the fermentor, we spared nothing in making this beer.  Epiphany was designed to showcase the glorious flavor and aromatics of hops without any astringent bitterness.  Citrus, tropical fruit and pine blend to provide you with a sublimely juicy hop experience. East or west coast? No. This is a Maine IPA.
                    </BeerDescription>
                </BeerDescriptionContainer>

            </FlexScrollView>
        );
    }
}

module.exports = BeerView;
