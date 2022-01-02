from scripts.helpful_scripts import get_account
from brownie import PenwuinToken, TokenFarm, network, config

from web3 import Web3

KEPT_BALANCE = Web3.toWei(100, "ether")


def deploy_token_farm_and_dapp_token():
    account = get_account()
    penwuin_token = PenwuinToken.deploy({"from": account})
    token_farm = TokenFarm.deploy(
        penwuin_token.address,
        {"from": account},
        publish_source=config["networks"][network.show_active()]["verify"],
    )

    tx = penwuin_token.transfer(
        token_farm, penwuin_token.totalSupply() - KEPT_BALANCE, {"from": account}
    )

    tx.wait(1)


def main():
    deploy_token_farm_and_dapp_token()
