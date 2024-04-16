import React from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
import MainLayout from '../layouts/MainLayout';
import { styles } from '../styles/styles';

function HomeScreen({ navigation }) {
    return (
        <MainLayout>
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.title}>Tic-Tac-Toe</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Game')}>
                        <Text style={styles.buttonText}>Play</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
                        <Text style={styles.buttonText}>About</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </MainLayout>
    )
}

export default HomeScreen;