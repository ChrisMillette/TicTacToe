import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { styles } from '../styles/styles';

function AboutScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.about}>Tic-Tac-Toe Application</Text>
            <Text style={styles.about}>SAIT CPRG 303 Project</Text>
            <Text style={styles.about}>Christopher Millette 000880139</Text>
            <Text style={styles.about}>Confetti Animation by Sammie Ho</Text>
            <Text style={styles.about}>https://lottiefiles.com/animations/confetti-ENxSnLhOBl</Text>
            <Text style={styles.about}>2024-04-15</Text>
        </View>
    );
}

export default AboutScreen;