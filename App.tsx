import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import Layout from './src/components/Layout';
import Routes from './src/Routes';

export default function App() {
    return (
        <Layout>
            <Routes />
        </Layout>
    );
}