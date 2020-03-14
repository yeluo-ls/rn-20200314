/* eslint-disable comma-dangle */
import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import { MarqueeHorizontal } from 'react-native-marquee-ab';
import { Dimensions } from 'react-native';


export default class NoticeComponent extends Component {

    get noticeList(){
        return [
            {label : '1', value : '亚博彩票迎来新彩种。 欢迎投注体验,随时充值! 快来体验吧！'},
            {label : '2', value : '两只老虎跑的快'},
            {label : '3', value : '蓝蓝的天上白云飘，白云下面小肥羊儿跑'},
        ];
    }

    get marqueeWidth(){
        let windowWidth = Dimensions.get('window').width;
        let iconWith = 36 * ratio;
        let marginRight = 14 * ratio;
        let marqueeWidth = windowWidth - iconWith - marginRight;
        return marqueeWidth;
    }
    
    render() {
        return (
            <View style={styles.noticeContainer}>
                <Image style={styles.noticeIcon} source={require('@images/home/notice-icon.png')} />
                <MarqueeHorizontal
                    textList = {this.noticeList}
                    speed = {60}
                    width = {this.marqueeWidth}
                    height = {30*ratio}
                    direction = {'left'}
                    reverse = {false}
                    textStyle = {styles.noticeText}
                    onTextClick = {(item) => {
                        alert(''+JSON.stringify(item));
                    }}
                />
            </View>
        );
    }
}

import { ratio } from '@src/assets/scripts/util.js';

const styles = StyleSheet.create({
    noticeContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        height: 32 * ratio,
        shadowOffset:{  width: 0,  height: 3,  },
        shadowColor: '#eceef5',
        shadowOpacity: 1.0,
        paddingTop: 2,
    },
    noticeIcon: {
        width: 17 * ratio,
        height: 13 * ratio,
        marginTop: 9.5 * ratio,
        marginRight: 5 * ratio,
        marginLeft: 14 * ratio,
    },

    noticeText: {
        fontSize: 12 * ratio,
        color: '#888fbf',
        lineHeight: 32 * ratio,
    }
});
