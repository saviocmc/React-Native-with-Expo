import React from 'react';
import { FlatList } from 'react-native';
import Item from './Item';

export type Service = {
    id: number;
    name: string;
    price: number;
    description: string;
}

const services: Service[] = [
    {
        id: 1,
        name: 'Banho',
        price: 79.9,
        description: 'Não dê banho no seu gato',
    },
    {
        id: 2,
        name: 'Vacina V4',
        price: 89.9,
        description: 'Uma dose da vacina V4. Seu gato precisa de duas',
    },
    {
        id: 3,
        name: 'Vacina Antirrábica',
        price: 99.9,
        description: 'Uma dose da vacina Antirrábica. Seu gato precisa de uma por ano',
    },
]

export default function Services() {
    return (
        <>
            <FlatList
                data={services}
                renderItem={({ item }) => <Item {...item} />}
                keyExtractor={(item) => item.id.toString()}
                removeClippedSubviews={false}
            />
        </>
    )
}