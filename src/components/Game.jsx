import React, { useState, useEffect, useRef } from 'react';
import {
    Text,
    TouchableOpacity,
    Alert,
    View,
} from 'react-native';
import { styles } from '../styles/styles';
import Board from './Board.jsx'
import LottieView from 'lottie-react-native';

const Game = () => {
    const [xwins, setXWins] = useState(0);
    const [owins, setOWins] = useState(0);
    const [draws, setDraws] = useState(0);
    const [board, setBoard] = useState(Array(9).fill(''));
    const [player, setPlayer] = useState('X');
    const [winner, setWinner] = useState('');
    const confettiRef = useRef(null);

    useEffect(() => {
        const winCheck = () => {
            const lines = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];
            for (let i = 0; i < lines.length; i++) {
                const [a, b, c] = lines[i];
                if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                    return board[a];
                }
            }
            return null;
        };

        {/* Checks if a player has won after updating the board, displays a popup for a win/draw and plays confetti animation */}
        const winner = winCheck();
        if (winner) {
            setWinner(winner);
            if (winner === 'X') {
                setXWins(xwins + 1);
            } else {
                setOWins(owins + 1);
            }
            confettiRef.current?.play(0); {/* Animation by Sammie Ho https://lottiefiles.com/animations/confetti-ENxSnLhOBl */}
            Alert.alert('Game Over!', `${winner} wins!`, [{ text: 'OK', onPress: () => resetGame() }]);
        } else if (!board.includes('')) {
            setDraws(draws + 1);
            Alert.alert('Game Over!', 'Draw!', [{ text: 'OK', onPress: () => resetGame() }]);
        }
    }, [board]);

    {/* Handler for when user clicks on a space, determines what letter is placed and updates the board */}
    const handleClick = (index) => {
        if (!winner && !board[index]) {
            const newBoard = [...board];
            newBoard[index] = player;
            setBoard(newBoard);
            const nextPlayer = player === 'X' ? 'O' : 'X';
            setPlayer(nextPlayer);
        }
    };

    {/* Resets the board and sets X as the starting player */}
    const resetGame = () => {
        setBoard(Array(9).fill(''));
        setPlayer('X');
        setWinner('');
    };

    {/* Sets all scores to 0 */}
    const resetScore = () => {
        setXWins(0);
        setOWins(0);
        setDraws(0);
    }

    return (
        <View style={styles.container}>
            <LottieView
                ref={confettiRef}
                source={require('../assets/confetti.json')}
                autoPlay={false}
                loop={false}
                style={styles.lottie}
                resizeMode='cover'
            />
            <Text style={styles.title}>Tic-Tac-Toe</Text>
            <Text style={styles.score}>X Wins: {xwins}</Text>
            <Text style={styles.score}>O Wins: {owins}</Text>
            <Text style={styles.score}>Draws: {draws}</Text>
            <Board board={board} onPress={handleClick} />
            <Text style={styles.turn}>{winner ? `${winner} wins!` : `Next player: ${player}`}</Text>
            <TouchableOpacity style={styles.reset} onPress={resetGame}>
                <Text style={styles.buttonText}>Reset Game</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reset} onPress={resetScore}>
                <Text style={styles.buttonText}>Reset Score</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Game;

