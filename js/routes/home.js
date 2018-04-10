import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1
    },
    appBar: {
        height: '64px',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    layout: {
        
    },
    text: {
        color: '#000'
    }
});

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

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