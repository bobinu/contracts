import {ethers} from "hardhat";

async function main(): Promise<void> {
    const bobInuFactory = await ethers.getContractFactory("BOBINU");
    await bobInuFactory.deploy().then(token => {
        console.log(token.address)
    });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
