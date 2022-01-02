// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PenwuinToken is ERC20 {
    // wei
    uint256 initialSupply = 1_000_000_000_000_000_000_000_000;

    constructor(uint256 initialSupply) ERC20("PenwuinToken", "PENW") {
        _mint(msg.sender, initialSupply);
    }
}
