import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Service } from '..';
import Button from '../../../components/Button';
import IntegerInput from '../../../components/IntegerInput';
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
                        <IntegerInput
                            value={quantity}
                            onValueChange={setQuantity}
                            style={styles.quantity}
                        />
                    </View>
                    <View style={styles.value}>
                        <Text style={styles.description}>Preço</Text>
                        <Text style={styles.price}>0</Text>
                    </View>
                </View>
                <Button value="Adicionar" onClick={() => alert('!!!')} />
            </View>
            <View style={styles.division}></View>
        </>
    );
}