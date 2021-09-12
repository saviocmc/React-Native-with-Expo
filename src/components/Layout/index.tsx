import React, { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar } from 'react-native';
import styles from '../../styles';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <SafeAreaView style={styles.fill}>
            <StatusBar />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'android' ? 'height' : 'padding'}
                style={styles.fill}
            >
                {children}
            </KeyboardAvoidingView>
        </SafeAreaView >
    );
}
