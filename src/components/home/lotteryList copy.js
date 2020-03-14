import React, {PureComponent} from 'react';
import { View, StyleSheet, Text, FlatList, TouchableHighlight} from 'react-native';

// const _renderSeries = ({item, index}) => {
//     let cls = [styles.series];
//     if(index == this.activeSeries){
//         cls.push(styles.activeSeries)
//     }
//     return <TouchableHighlight onPress={()=>this.clickOnItem(index)}>
//         <Text style={styles.series}>{item}</Text>
//     </TouchableHighlight>
// }

// const _renderLottery = ({item}) => (
//     <Text style={styles.lottery}>{item}</Text>
// )

// function homePage(){
//     return (
//         <View style={styles.scene}>
//             <View>
//                 <FlatList style={styles.seriesList}
//                     extraData={this.state}
//                     keyExtractor={(index)=>index}
//                     data={['11','2','3,4','5,6,7,8','9,10,11,12,13,14']}
//                     renderItem={this._renderSeries}
//                 />
//             </View>

//             <FlatList style={styles.lotteryList}
//                 ref={o=>{this.lotteryList = o;}}
//                 extraData={this.state}
//                 keyExtractor={(index)=>index}
//                 data={['11','2','3,4','5,6,7,8','9,10,11,12,13,14']}
//                 renderItem={this._renderLottery}
//             />
//         </View>
//     )
// }
export default class homePage extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            activeSeries: 0,
        }
    }

    clickOnItem(index){
        console.log(index)
        this.setState({
            activeSeries: index
        });

        if(this.lotteryList){
            this.lotteryList.scrollToIndex({
                index,
            });
        }
    }

    _renderSeries = ({item, index}) => {
        let cls = [styles.series];
        if(index == this.state.activeSeries){
            cls.push(styles.activeSeries)
        }
        return <TouchableHighlight onPress={()=>this.clickOnItem(index)}>
            <Text style={cls}>{item}</Text>
        </TouchableHighlight>
    }

    _renderLottery = ({item}) => (
        <Text style={styles.lottery}>{item}</Text>
    )

    _lotteryListScroll = ({viewableItems, changed}) => {
        console.log(viewableItems, changed)
        let index = viewableItems[0].index;

        this.setState({
            activeSeries: index
        });

        if(this.seriesList){
            this.seriesList.scrollToIndex({
                index,
            });
        }
    }

    render() {
        return (
            <View style={styles.scene}>
                <View>
                    <FlatList style={styles.seriesList}
                    ref={o=>{this.seriesList = o;}}
                        extraData={this.state}
                        keyExtractor={(index)=>index}
                        data={['00','01','02','03','04', '05', '06', '07']}
                        renderItem={this._renderSeries}
                    />
                </View>
                <FlatList style={styles.lotteryList}
                    ref={o=>{this.lotteryList = o;}}
                    extraData={this.state}
                    keyExtractor={(index)=>index}
                    data={['00','01','02','03','04', '05', '06', '07']}
                    renderItem={this._renderLottery}
                    onViewableItemsChanged={this._lotteryListScroll}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    scene: {
        backgroundColor: '#ff4081',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 13,
        flex: 1,
        marginBottom: 10,
    },
    seriesList: {
        width: 82,
        backgroundColor: 'blue',
        marginRight: 9,
    },
    series: {
        height: 95,
        lineHeight: 45,
        fontSize: 14,
        backgroundColor: '#fff',
        width: 82,
        textAlign: 'center',
        marginBottom: 13,
    },
    activeSeries:{
        fontSize: 40
    },

    lotteryList: {
        flex: 1,
        backgroundColor: 'blue',
        flexDirection: 'column',
    },
    lottery: {
        height: 500,
        fontSize: 14,
        backgroundColor: '#fff',
        textAlign: 'center',
        marginTop: 13,
    },
});

