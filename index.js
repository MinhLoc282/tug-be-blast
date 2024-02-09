require("dotenv").config();
const express = require('express')
const Web3 = require('web3')

const {EvmPriceServiceConnection} = require('@pythnetwork/pyth-evm-js');

const constants = require('./constant')

const app = express()

// const PORT = 5000

app.listen(5001, () => {
    // console.log(`Server running on port ${PORT}`)
    console.log(`Server running on port 5001`)
})

app.get('/', (req, res) => {
    res.send("tug-be-update")
})

// init web3
const web3 = new Web3(new Web3.providers.HttpProvider('https://sepolia.blast.io'));

const pythEvmContact = new web3.eth.Contract(constants.IPythAbi, constants.PYTH_CONTACT_ADDRESS);
const ContractTugPair1 = new web3.eth.Contract(constants.TUGPAIR_ABI, constants.TUGPAIR_SC_1)
const ContractTugPair2 = new web3.eth.Contract(constants.TUGPAIR_ABI, constants.TUGPAIR_SC_2)

const main = async () => {
    const networkId = await web3.eth.net.getId()

    console.log(`Connecting to ${networkId}`)

    const connectionEVM = new EvmPriceServiceConnection(
        "https://hermes.pyth.network"
      ); // See Price Service endpoints section below for other endpoints

    // -----------------------getEpochDuration ------------------------
    const resEpochDuration1 = await ContractTugPair1.methods.epochDuration().call()
    const resEpochDuration2 = await ContractTugPair2.methods.epochDuration().call()

    const getCurrentEpochTime1 = async () => {
        const priceIds = [
            // You can find the ids of prices at https://pyth.network/developers/price-feed-ids#pyth-evm-testnet
            "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace", // ETH/USD price id in testnet
            '0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43', // BTC/USD price id in testnet
            // "0xd0ca23c1cc005e004ccf1db5bf76aeb6a49218f43dac3d4b275e92de12ded4d1", // BNB/USD price id in testnet
            // "0x2f95862b045670cd22bee3114c39763a4a08beeb663b145d283c31d7d1101c4f", // BNB/USD price id in testnet
            // "0x765d2ba906dbc32ca17cc11f5310a89e9ee1f6420508c63861f2f8ba4ee34bb2", //MATIC/USD
    
        ];

        const currentTime = new Date()
        const resStartTime1 = await ContractTugPair1.methods.startTime().call()
        const resLastestEpoch1 = await ContractTugPair1.methods.getLatestEpoch().call()

        const currentEpochTime1 = Number(resStartTime1) + (Number(resLastestEpoch1) * Number(resEpochDuration1))
        
        if (currentEpochTime1 < currentTime.getTime() / 1000) {
                try {
                    const priceUpdateData = await connectionEVM.getPriceFeedsUpdateData(priceIds);

                    const updateFee = await pythEvmContact.methods
                    .getUpdateFee(priceUpdateData)
                    .call();
                    
                    const tx = ContractTugPair1.methods.updateEpoch(priceUpdateData)
                    const gas = await tx.estimateGas({ from: constants.FROM_ADDRESS, value: updateFee })
                    const gasPrice = await web3.eth.getGasPrice()
                    const data = tx.encodeABI()
                    const nonce = await web3.eth.getTransactionCount(constants.FROM_ADDRESS)      
                    
                    const signedTx = await web3.eth.accounts.signTransaction({
                        to: constants.TUGPAIR_SC_1,
                        data,
                        gas,
                        gasPrice,
                        nonce,
                        value: updateFee,
                        chainId: networkId,
                    },
                    '9c38b9afc685b94814f25ba6cd02b7577b4abf9e65dfc4f6425638ab7f448149',
                    )
                    
                    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
                    
                } catch (error) {
                    console.log('========1', error);
                }
        }
    }

    const getCurrentEpochTime2 = async () => {
        const priceIds = [
            // You can find the ids of prices at https://pyth.network/developers/price-feed-ids#pyth-evm-testnet
            // "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace", // ETH/USD price id in testnet
            '0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43', // BTC/USD price id in testnet
            // "0xd0ca23c1cc005e004ccf1db5bf76aeb6a49218f43dac3d4b275e92de12ded4d1", // BNB/USD price id in testnet
            // "0x2f95862b045670cd22bee3114c39763a4a08beeb663b145d283c31d7d1101c4f", // BNB/USD price id in testnet
            "0x765d2ba906dbc32ca17cc11f5310a89e9ee1f6420508c63861f2f8ba4ee34bb2", //MATIC/USD
    
        ];
        
        const currentTime = new Date()
        const resStartTime2 = await ContractTugPair2.methods.startTime().call()
        const resLastestEpoch2 = await ContractTugPair2.methods.getLatestEpoch().call()

        const currentEpochTime2 = Number(resStartTime2) + (Number(resLastestEpoch2) * Number(resEpochDuration2))
        
        if (currentEpochTime2 < currentTime.getTime() / 1000) {
                try {
                    const priceUpdateData = await connectionEVM.getPriceFeedsUpdateData(priceIds);

                    const updateFee = await pythEvmContact.methods
                    .getUpdateFee(priceUpdateData)
                    .call();
                    
                    const tx = ContractTugPair2.methods.updateEpoch(priceUpdateData)
                    const gas = await tx.estimateGas({ from: constants.FROM_ADDRESS, value: updateFee })
                    const gasPrice = await web3.eth.getGasPrice()
                    const data = tx.encodeABI()
                    const nonce = await web3.eth.getTransactionCount(constants.FROM_ADDRESS)      
                    
                    const signedTx = await web3.eth.accounts.signTransaction({
                        to: constants.TUGPAIR_SC_2,
                        data,
                        gas,
                        gasPrice,
                        nonce,
                        value: updateFee,
                        chainId: networkId,
                    },
                    '9c38b9afc685b94814f25ba6cd02b7577b4abf9e65dfc4f6425638ab7f448149',
                    )
                    
                    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
                    
                } catch (error) {
                    console.log('========1', error);
                }
        }
    }

    // const getCurrentEpochTime2 = async () => {
    //     const currentTime = new Date()
    //     const resStartTime2 = await ContractTugPair2.methods.startTime().call()
    //     const resLastestEpoch2 = await ContractTugPair2.methods.getLatestEpoch().call()

    //     const currentEpochTime2 = Number(resStartTime2) + (Number(resLastestEpoch2) * Number(resEpochDuration2))
       
    //     if (currentEpochTime2 < currentTime.getTime() / 1000) {
    //         const resEpochData2 = await ContractTugPair2.methods.epochData(resLastestEpoch2).call()
    
    //         if (resEpochData2.token0SharesIssued > 0 || resEpochData2.token1SharesIssued > 0) {
    //             try {
    //                 const tx = ContractTugPair2.methods.updateEpoch()
    //                 const gas = await tx.estimateGas({ from: constants.FROM_ADDRESS })
    //                 const gasPrice = await web3.eth.getGasPrice()
    //                 const data = tx.encodeABI()
    //                 const nonce = await web3.eth.getTransactionCount(constants.FROM_ADDRESS)
            
                    
    //                 const signedTx = await web3.eth.accounts.signTransaction({
    //                     to: constants.TUGPAIR_SC_2,
    //                     data,
    //                     gas,
    //                     gasPrice,
    //                     nonce,
    //                     chainId: networkId,
    //                 },
    //                 '8102957e1c2858fe3661ae1d0b1eaecc2b3f85885613eb99d6dd175998806afc',
    //                 )
                    
    //                 const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
                    
    //             } catch (error) {
    //                 console.log('========2', error);
    //             }
    //         }
    //     }
    // }

    setInterval(getCurrentEpochTime1, Number(resEpochDuration1) * 1000);
    setInterval(getCurrentEpochTime2, Number(resEpochDuration2) * 1000);
}

main()