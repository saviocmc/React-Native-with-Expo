import React from 'react';
import { FlatList } from 'react-native';
import CartStatus from '../../components/CartStatus';
import Layout from '../../components/Layout';
import Item from './Item';

export type Service = {
    id: number;
    name: string;
    price: number;
    description: string;
    quantity: number;
}

const services: Service[] = [
    {
        id: 1,
        name: 'Banho',
        price: 79.9,
        description: 'Não dê banho no seu gato',
        quantity: 1,
    },
    {
        id: 2,
        name: 'Vacina V4',
        price: 89.9,
        description: 'Uma dose da vacina V4. Seu gato precisa de duas',
        quantity: 2,
    },
    {
        id: 3,
        name: 'Vacina Antirrábica',
        price: 99.9,
        description: 'Uma dose da vacina Antirrábica. Seu gato precisa de uma por ano',
        quantity: 1,
    },
]

export default function Cart() {

    const total = services.reduce((total, { price, quantity }) => total + price * quantity, 0);

    return (
        <Layout>
            <CartStatus total={total} />
            <FlatList
                data={services}
                renderItem={({ item }) => <Item {...item} />}
                keyExtractor={(item) => item.id.toString()}
                removeClippedSubviews={false}
            />
        </Layout>
    )
}