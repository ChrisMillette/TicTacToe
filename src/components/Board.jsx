import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from '../styles/styles';

{/* Board is made up of square TouchableOpacity buttons, updates square with the current player (X or O) when pressed */}
const Board = ({ board, onPress }) => {
    const renderSquare = (index) => (
        <TouchableOpacity style={styles.square} onPress={() => onPress(index)}>
            <Text style={styles.squareText}>{board[index]}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.board}>
            <View style={styles.row}>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </View>
            <View style={styles.row}>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </View>
            <View style={styles.row}>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </View>
        </View>
    );
}

export default Board;