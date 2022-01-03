import { ChainId, DAppProvider } from '@usedapp/core';
import { useState } from 'react';
import { Header } from '../components/Header';

function Deposit() {
    return (
        <DAppProvider config={{
            supportedChains: [ChainId.Kovan]
        }}>
            <Header></Header>
            <h1>Deposit</h1>
        </DAppProvider>
    );
}

export default Deposit;
