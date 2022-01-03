import { ChainId, DAppProvider } from '@usedapp/core';
import { Header } from '../components/Header';
import { StakeComponent } from '../components/Stake';

function Stake() {
    return (
        <DAppProvider config={{
            supportedChains: [ChainId.Kovan]
        }}>
            <Header ></Header>
            <StakeComponent />
        </DAppProvider>
    );
}

export default Stake;
