import React from 'react';
import { StyleProp, TextInput, TextStyle } from 'react-native';
import defaultStyles from './styles';

interface Props {
    value: number;
    onValueChange: (value: number) => void;
    style?: StyleProp<TextStyle>;
}

export default function IntegerInput({ value, onValueChange, style }: Props) {

    function onTextChange(textValue: string) {
        if (textValue === '') { onValueChange(0); }
        const numericValue = Number.parseInt(textValue);
        if (isNaN(numericValue)) { return };
        onValueChange(numericValue);
    }

    return <TextInput
        value={value.toString()}
        onChangeText={onTextChange}
        keyboardType='number-pad'
        selectTextOnFocus
        style={[defaultStyles.input, style]}
    />
}