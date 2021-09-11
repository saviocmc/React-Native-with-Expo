import React from 'react';
import { TextInput } from 'react-native';

interface Props {
    value: number;
    onValueChange: (value: number) => void;
}

export default function InputInteger({ value, onValueChange }: Props) {
    return <TextInput
        value={value.toString()}
        onChangeText={(value) => onValueChange(Number.parseInt(value))}
        keyboardType='number-pad'
        selectTextOnFocus
    />
}