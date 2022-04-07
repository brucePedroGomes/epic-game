async function main() {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy();
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
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