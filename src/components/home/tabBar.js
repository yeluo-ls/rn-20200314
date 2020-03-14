import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';

export default class TabBar extends Component{
    renderTab() {
        const { tabs } = this.props;
        return tabs.map((name, index) =>{
            return <TouchableOpacity key={index} onPress={()=>this.props.goToPage(index)}>
                <Text style={styles.tabBarText}>
                    {name}
                </Text>
            </TouchableOpacity>;
        });
    }

    render(){
        const translateWidth = (193-70)*ratio;
        const translateX = this.props.scrollValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, translateWidth],
        });
        const scaleX = this.props.scrollValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 1.7, 1],
        });

        return (
            <View style={styles.tabBarContainer}>
                {
                    this.renderTab()
                }
                <Animated.View
                    style={[
                        styles.tabUnderline,
                        {
                            transform: [
                                { 
                                    translateX,
                                    scaleX
                                },
                            ]
                        }
                    ]}
                >
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
                        colors={['red', 'blue']} style={styles.linearGradient} />
                </Animated.View>
            </View>
        )
    }
}

import { ratio } from '@src/assets/scripts/util.js';
const styles = StyleSheet.create({
    tabBarContainer: {
        alignSelf: 'center',
        height: 42 * ratio,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 193 * ratio
    },
    tabBarText: {
        height: 42 * ratio,
        lineHeight: 40 * ratio,
        // color: '#4967da',
        color: '#787ea8',
        width: 70 * ratio,
        fontSize: 17 * ratio,
    },
    tabUnderline: {
        position: 'absolute',
        height: 2,
        width: 70 * ratio,
        backgroundColor: 'navy',
        bottom: 0,
        left: 0 * ratio,
    },
    linearGradient:{
        width: '100%',
        height: '100%',
    },
});

