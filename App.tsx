import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import Layout from './src/components/Layout';
import { log } from './src/logger';
import Routes from './src/Routes';

export default function App() {
    log('Starting up App...');
    return (
        <Layout>
            <Routes />
        </Layout>
    );
}