import React from 'react';
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';
import styles from './styles';

interface Props {
    value: string;
    onClick: () => void;
    style?: StyleProp<ViewStyle>;
    small?: boolean;
    inverted?: boolean;
}

export default function Button({ value, onClick, style, small = false, inverted = false }: Props) {
    return (
        <TouchableOpacity style={[styles(small, inverted).button, style]} onPress={() => onClick()}>
            <Text style={styles(small, inverted).value}> {value} </Text>
        </TouchableOpacity>
    )
}