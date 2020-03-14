/* eslint-disable comma-dangle */
import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Carousel , { getInputRangeFromIndexes } from 'react-native-snap-carousel';

function scrollInterpolator4 (index, carouselProps) {
    const range = [1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return { inputRange, outputRange };
}
function animatedStyles4 (index, animatedValue, carouselProps) {
    let _height = 160 * ratio * 0.1 / 2;
    let _width = 120 * ratio * 0.1 / 2;
    return {
        zIndex: carouselProps.data.length - index,
        transform: [
            {
                scale: animatedValue.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [0.9, 1, 0.9],
                    extrapolate: 'clamp'
                })
            },
            {
                translateY: animatedValue.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [_height,0,_height],
                    extrapolate: 'clamp'
                })
            },
            {
                translateX: animatedValue.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [_width,0,_width],
                    extrapolate: 'clamp'
                })
            },
        ]
    };
}

export default class SwiperComponent extends Component {
    _renderItem ({item}) {
        return (
            <Image source={item.source} style={styles.image} />
        );
    }

    get banners(){
        return [
            {
                source: require('@images/home/banner/slider1.png'),
            },
            {
                source: require('@images/home/banner/slider2.png'),
            },
            {
                source: require('@images/home/banner/slider3.png'),
            },
            {
                source: require('@images/home/banner/slider4.png'),
            },
            {
                source: require('@images/home/banner/slider5.png'),
            },
            {
                source: require('@images/home/banner/slider6.png'),
            }
        ];
    }

    render() {
        return (
            <View style={styles.bannerContainer}>
                <Carousel
                    data={this.banners}
                    renderItem={this._renderItem}
                    sliderWidth={Math.round(360 * ratio)}
                    itemWidth={Math.round(120 * ratio)}
                    inactiveSlideScale={1}
                    inactiveSlideOpacity={1}
                    activeSlideAlignment={'start'}
                    slideStyle={styles.slide}
                    loop={true}
                    loopClonesPerSide={3}
                    autoplay={true}
                    scrollInterpolator={scrollInterpolator4}
                    slideInterpolatedStyle={animatedStyles4}
                    lockScrollWhileSnapping={true}
                />
            </View>
        );
    }
}

import { ratio } from '@src/assets/scripts/util.js';

const styles = StyleSheet.create({
    bannerContainer: {
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: 10
    },
    slide: {
        height: 160 * ratio,
        alignItems: 'center',
        flex: 1,
    },
    image: {
        width: '100%',
        height: 160 * ratio,
        borderRadius: 6,
        alignSelf: 'center',
    }
});
