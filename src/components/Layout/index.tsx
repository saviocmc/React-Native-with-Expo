import React, { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar } from 'react-native';
import { colors } from '../../styles';
import styles from './styles';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <SafeAreaView style={styles.layout}>
                <StatusBar backgroundColor={colors.purple} />
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'android' ? 'height' : 'padding'}
                    style={styles.fill}
                >
                    {children}
                </KeyboardAvoidingView>
            </SafeAreaView >
            <SafeAreaView style={styles.layoutBottom} />
        </>
    );
}
