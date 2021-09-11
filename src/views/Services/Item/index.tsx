import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Service } from '..';
import Button from '../../../components/Button';
import IntegerInput from '../../../components/IntegerInput';
import styles from './styles';

export default function Item({ name, price, description }: Service) {

    const [quantity, setQuantity] = useState<number>(1);
    const [total, setTotal] = useState<number>(0);
    const [expand, setExpand] = useState(false);

    useEffect(function () {
        setTotal(quantity * price);
    }, [quantity])

    function formatCurrency(value: number): string {
        return Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
        }).format(value)
    }

    function toggleItem() {
        setExpand(expand => !expand);
    }

    return (
        <>
            <TouchableOpacity style={styles.info} onPress={() => toggleItem()}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.price}>{formatCurrency(price)}</Text>
            </TouchableOpacity>
            {
                expand &&
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
                            <Text style={styles.description}>Total</Text>
                            <Text style={styles.price}>{formatCurrency(total)}</Text>
                        </View>
                    </View>
                    <Button value="Adicionar" onClick={() => alert('!!!')} />
                </View>
            }
            <View style={styles.division}></View>
        </>
    );
}