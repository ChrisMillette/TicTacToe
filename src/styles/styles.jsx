import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 0.99,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    score: {
        marginBottom: 5,
    },
    about: {
        fontSize: 12,
        textAlign: 'center',
    },
    board: {
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
    },
    square: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    squareText: {
        fontSize: 32,
    },
    turn: {
        fontSize: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
    reset: {
        backgroundColor: '#FF0000',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        justifyContent: 'center',
    },
    footer: {
        padding: 10,
    },
    lottie: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: -1,
        pointerEvents: 'none',
    },
});

export { styles }