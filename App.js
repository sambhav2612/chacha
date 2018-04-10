import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1
    },
    appBar: {
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    layout: {
        
    }
});

export default class App extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.appBar}>

                </View>
                <View style={styles.layout}></View>
            </View>
        );
    }
}