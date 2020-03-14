import React, {Component} from 'react';
import { SafeAreaView,StyleSheet, Dimensions} from 'react-native';

var ScrollableTabView = require('react-native-scrollable-tab-view');

import Banner from './banner.js';
import Notice from './notice';
import TabBar from './tabBar';
import LotteryList from './lotteryList';
import RecentPlay from './recentPlay';

export default class homePage extends Component {
    render() {
        const navigation = this.props.navigation;
        navigation.setOptions({
            headerShown: false
        });

        return (
            <SafeAreaView style={styles.homeBg}>
                <Banner/>
                <Notice/>
                <ScrollableTabView
                    style={styles.tabView}
                    renderTabBar={() => <TabBar />}
                    >
                    <LotteryList tabLabel="全部彩种" />
                    <RecentPlay tabLabel="最近玩过" />
                </ScrollableTabView>
            </SafeAreaView>
        );
    }
}
import { ratio } from '@src/assets/scripts/util.js';

const styles = StyleSheet.create({
    homeBg: {
        backgroundColor: '#f6f6f6',
        flex: 1
    },
    tabView:{
        marginTop: 3 * ratio,
        backgroundColor: '#fff',
    }
});

