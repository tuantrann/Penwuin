import { ChainId, DAppProvider } from '@usedapp/core';
import { useState } from 'react';
import { Header } from '../components/Header';

function Dashboard() {

    return (
        <DAppProvider config={{
            supportedChains: [ChainId.Kovan]
        }}>
            <Header></Header>
            <h1>Dashboard</h1>
        </DAppProvider>
    );
}

export default Dashboard;
