import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { Service } from '..';
import InputInteger from '../../../components/InputInteger';
import styles from './styles';

export default function Item({ name, price, description }: Service) {

    const [quantity, setQuantity] = useState<number>(1);

    return (
        <>
            <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
            <View style={styles.cart}>
                <View>
                    <View style={styles.value}>
                        <Text style={styles.description}>Quantidade</Text>
                        <InputInteger value={quantity} onValueChange={setQuantity} />
                    </View>
                    <View style={styles.value}>
                        <Text style={styles.description}>Preço</Text>
                        <Text style={styles.price}>0</Text>
                    </View>
                </View>
                <Button title="Adicionar" onPress={() => alert('!!!')} />
            </View>
            <View style={styles.division}></View>
        </>
    );
}