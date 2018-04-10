import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1
    },
    appBar: {
        height: '64',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    layout: {
        flex: 1,
    },
    text: {
        color: '#000'
    }
});

export default class Home extends React.Component {
    render() {
        return(
            <ScrollView style={styles.container}>
                <View style={styles.appBar}>
                    <Text style={styles.text}>Hello</Text>
                </View>
                <View style={styles.layout}>
                    <Text style={styles.text}>Hello</Text>
                </View>
            </ScrollView>
        );
    }
}