import React from 'react';
import { FlatList } from 'react-native';
import CartStatus from '../../components/CartStatus';
import Item from '../../components/Item';
import { services } from '../../servicesMockData';

export default function Cart() {

    const total = services.reduce((total, { price }) => total + price, 0);

    return (
        <>
            <CartStatus total={total} />
            <FlatList
                data={services}
                renderItem={({ item }) =>
                    <Item
                        service={item}
                        buttonTitle='Remover do Carrinho'
                        isExpandable={false}
                        onButtonPress={() => alert('STUB!!!')}
                    />}
                keyExtractor={(item) => item.id.toString()}
                removeClippedSubviews={false}
            />
        </>
    )
}