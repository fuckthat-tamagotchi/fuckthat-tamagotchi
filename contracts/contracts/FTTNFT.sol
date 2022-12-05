// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract FuckThatTamagotchi is ERC721Enumerable {
    uint256 public totalMints = 0;

    uint256 public maxSupply = 50;
    uint256 public maxPerWallet = 5;
    uint256 public blocksPerLevel = 3000;
    uint256 public poopIncrament = 1000;
    uint256 public feedIncrament = 20000;
    uint256 public maxAmountOfPoop = 10;
    uint256 public petBonus = 500;
    uint256 public birthDate;
    uint256 public lastPoopClean;
    uint256 public lastFeeding;

    string public URI =
        "https://bafybeifqmgyfy4by3gpms5sdv3ft3knccmjsqxfqquuxemohtwfm7y7nwa.ipfs.dweb.link/metadata.json";
    mapping(address => uint256) public walletMints;
    mapping(uint256 => Tamagotchi) tamagotchis;
    struct Tamagotchi {
        uint256 tokenId;
        uint256 birthDate;
        uint256 lastPoopClean;
        uint256 lastFeeding;
    }

    constructor() ERC721("Fuck That Tamagotchi", "FTT") {}

    // Read Transactions
    function getLevel(uint256 tokenId) public view returns (uint256 level) {
        uint256 ageInBlocks = block.number - tamagotchis[tokenId].birthDate;
        level = ageInBlocks / blocksPerLevel;
        return level;
    }

    function getPoops(uint256 tokenId) public view returns (uint256 poops) {
        uint256 blocksSinceLastPoopClean = block.number -
            tamagotchis[tokenId].lastPoopClean;
        poops = blocksSinceLastPoopClean / poopIncrament;
        return poops;
    }

    function getLastFeed(
        uint256 tokenId
    ) public view returns (uint256 lastFeed) {
        uint256 blocksSinceLastFeed = block.number -
            tamagotchis[tokenId].lastFeeding;
        return blocksSinceLastFeed;
    }

    function getMyWalletMints() public view returns (uint256) {
        return walletMints[msg.sender];
    }

    // Write Transactions

    function mintToken() public payable {
        safeMint(msg.sender);
    }

    function pet(uint256 tokenId) public {
        tamagotchis[tokenId].birthDate -= petBonus;
    }

    function feed(uint256 tokenId) public {
        uint256 blocksSinceLastFeed = block.number -
            tamagotchis[tokenId].lastFeeding;
        require(
            blocksSinceLastFeed > (feedIncrament / 2),
            "Tamagotchi has ate recently!"
        );
        tamagotchis[tokenId].lastFeeding = block.number;
    }

    function cleanPoop(uint256 tokenId) public {
        tamagotchis[tokenId].lastPoopClean = block.number;
    }

    function adopt(uint256 tokenId) public {
        require(
            tamagotchis[tokenId].lastFeeding < (block.number - feedIncrament) &&
                (tamagotchis[tokenId].lastPoopClean <
                    (block.number - (poopIncrament * maxAmountOfPoop))),
            "This Tamagotchi has been taken care of! Don't steal them!"
        );
        tamagotchis[tokenId].lastPoopClean = block.number;
        tamagotchis[tokenId].lastFeeding = block.number;
        transferFrom(
            ownerOf(tamagotchis[tokenId].tokenId),
            msg.sender,
            tokenId
        );
    }

    //Internal
    function safeMint(address to) internal {
        require(totalMints < maxSupply, "No more Tamagotchis will be minted");
        require(
            walletMints[msg.sender] <= maxPerWallet,
            "You've minted so many already. Don't be greedy."
        );
        uint256 tokenId = totalMints;
        birthDate = block.number;
        lastPoopClean = birthDate;
        lastFeeding = birthDate;
        tamagotchis[tokenId] = Tamagotchi(
            tokenId,
            birthDate,
            birthDate,
            birthDate
        );
        totalMints++;

        _safeMint(to, tokenId);
    }
}
