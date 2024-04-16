import React from 'react';
import {
    SafeAreaView,
    View,
} from 'react-native';
import MainLayout from '../layouts/MainLayout';
import Game from '../components/Game';
import { styles } from '../styles/styles';

function GameScreen({ navigation }) {
    return (
        <MainLayout>
            <SafeAreaView>
                <View style={styles.container}>
                    <Game />
                </View>
            </SafeAreaView>
        </MainLayout>
    )
}

export default GameScreen;