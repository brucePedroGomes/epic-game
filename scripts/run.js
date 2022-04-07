async function main() {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Rock Lee", "Gojo", "Tanjiro"],
        [
            "https://i.imgur.com/o49tGrF.gif",
            "https://i.imgur.com/2FDMEZ5.gif",
            "https://i.imgur.com/bT7bPRO.gif"
        ]
        ,
        [100, 900, 300],
        [100, 50, 25]
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    // We only have three characters.
    // an NFT w/ the character at index 2 of our array.
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    // Get the value of the NFT's URI.
    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("Token URI:", returnedTokenUri);
}

async function runMain() {
    try {
        await main()
        process.exit(0)

    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

runMain()



