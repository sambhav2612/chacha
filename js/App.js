import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './routes/home';

const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        }
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        },
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
};