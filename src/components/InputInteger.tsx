import React from 'react';
import { TextInput } from 'react-native';

interface Props {
    value: number;
    onValueChange: (value: number) => void;
}

export default function InputInteger({ value, onValueChange }: Props) {

    function onTextChange(textValue: string) {
        const numericValue = Number.parseInt(textValue);
        if (isNaN(numericValue)) { return };
        onValueChange(numericValue);
    }

    return <TextInput
        value={value.toString()}
        onChangeText={onTextChange}
        keyboardType='number-pad'
        selectTextOnFocus
    />
}