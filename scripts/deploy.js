const characters = ["Rock Lee", "Gojo", "Tanjiro"];
const images = [
    "https://i.imgur.com/o49tGrF.gif",
    "https://i.imgur.com/2FDMEZ5.gif",
    "https://i.imgur.com/bT7bPRO.gif",
];
const heaths = [100, 900, 300];
const damages = [100, 50, 25];

async function main() {
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");

    const gameContract = await gameContractFactory.deploy(
        characters,
        images,
        heaths,
        damages
    );

    await gameContract.deployed();

    console.log("Contract deployed to:", gameContract.address);

    let txn;

    txn = await gameContract.mintCharacterNFT(0);
    await txn.wait();
    console.log("Minted NFT #1");

    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #2");

    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    console.log("Minted NFT #3");

    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #4");

    console.log("Done deploying and minting!");
}

async function runMain() {
    try {
        await main();
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

runMain();
