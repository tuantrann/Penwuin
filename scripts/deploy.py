from scripts.helpful_scripts import get_account, get_contract
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
    # Penwuin token, weth_token, fau_token/dai
    weth_token = get_contract("weth_token")
    fau_token = get_contract("fau_token")

    add_allowed_tokens(
        token_farm,
    )


def add_allowed_tokens(token_farm, dict_of_allowed_tokens, account):
    pass


def main():
    deploy_token_farm_and_dapp_token()
