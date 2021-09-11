import React from 'react';
import { Text } from 'react-native';
import { Service } from '..';

export default function Item({ name, price, description }: Service) {
    return (
        <>
            <Text>{ name }</Text>
            <Text>{ price }</Text>
            <Text>{ description }</Text>
        </>
    );
}