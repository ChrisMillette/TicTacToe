import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

function Footer() {
    return (
        <View style={styles.footer}>
            <Text>TicTacToeApp 2024-04-15</Text>
        </View>
    );
}

const MainLayout = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
            <Footer />
        </View>
    );
};

export default MainLayout;