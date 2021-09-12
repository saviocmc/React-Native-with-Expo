import React from 'react';
import { Text, View } from 'react-native';
import Button from '../Button';
import styles from './styles';

export default function CartStatus({ total }: { total: number }) {

    function formatCurrency(value: number): string {
        return Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
        }).format(value)
    }

    return (
        <View style={styles.content}>
            <View style={styles.total}>
                <Text style={styles.description}> Total do Carrinho </Text>
                <Text style={styles.value}> {formatCurrency(total)} </Text>
            </View>
            <View style={styles.button}>
                <Button value='Concluir Pedido'
                    onClick={() => alert('not implemented')}
                    inverted={true}
                />
            </View>
        </View>
    );
}