import { ChainId, DAppProvider } from '@usedapp/core';
import { useState } from 'react';
import { Header } from '../components/Header';

function Borrow() {

    return (
        <DAppProvider config={{
            supportedChains: [ChainId.Kovan]
        }}>
            <Header></Header>
            <h1>Borrow</h1>
        </DAppProvider>
    );
}

export default Borrow;
