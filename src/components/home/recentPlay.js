import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';


export default class homePage extends Component {
    render() {
        return (
            <View style={styles.scene} />
        );
    }
}
const styles = StyleSheet.create({
    scene: {
        backgroundColor: 'red',
        flex: 1
    }
});

