import React from 'react';
import { FlatList } from 'react-native';
import Item from '../../components/Item';
import { services } from '../../servicesMockData';

export default function Services() {
    return (
        <>
            <FlatList
                data={services}
                renderItem={({ item }) =>
                    <Item
                        service={item}
                        buttonTitle='Adicionar ao Carrinho'
                        isExpandable={true}
                        onButtonPress={() => alert('STUB!!!')}
                    />}
                keyExtractor={(item) => item.id.toString()}
                removeClippedSubviews={false}
            />
        </>
    )
}