module.exports = Object.freeze({
    PYTH_CONTACT_ADDRESS: '0xA2aa501b19aff244D90cc15a4Cf739D2725B5729',
    TUGPAIR_SC_1: '0xA9C2A6a35F305c0aA9C8B3CC0cAB46E783ef71c0',
    TUGPAIR_SC_2: '0xDFf5349B7e55Bf6A43cEC277967e7D6d978E6103',
    FROM_ADDRESS: '0x31E0D34066379B73aCd3f3D0834fbdCdE87023C5',
    IPythAbi: [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint16",
            "name": "chainId",
            "type": "uint16"
          },
          {
            "indexed": false,
            "internalType": "uint64",
            "name": "sequenceNumber",
            "type": "uint64"
          }
        ],
        "name": "BatchPriceFeedUpdate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "id",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "uint64",
            "name": "publishTime",
            "type": "uint64"
          },
          {
            "indexed": false,
            "internalType": "int64",
            "name": "price",
            "type": "int64"
          },
          {
            "indexed": false,
            "internalType": "uint64",
            "name": "conf",
            "type": "uint64"
          }
        ],
        "name": "PriceFeedUpdate",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "id",
            "type": "bytes32"
          }
        ],
        "name": "getEmaPrice",
        "outputs": [
          {
            "components": [
              {
                "internalType": "int64",
                "name": "price",
                "type": "int64"
              },
              {
                "internalType": "uint64",
                "name": "conf",
                "type": "uint64"
              },
              {
                "internalType": "int32",
                "name": "expo",
                "type": "int32"
              },
              {
                "internalType": "uint256",
                "name": "publishTime",
                "type": "uint256"
              }
            ],
            "internalType": "struct PythStructs.Price",
            "name": "price",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "id",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "age",
            "type": "uint256"
          }
        ],
        "name": "getEmaPriceNoOlderThan",
        "outputs": [
          {
            "components": [
              {
                "internalType": "int64",
                "name": "price",
                "type": "int64"
              },
              {
                "internalType": "uint64",
                "name": "conf",
                "type": "uint64"
              },
              {
                "internalType": "int32",
                "name": "expo",
                "type": "int32"
              },
              {
                "internalType": "uint256",
                "name": "publishTime",
                "type": "uint256"
              }
            ],
            "internalType": "struct PythStructs.Price",
            "name": "price",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "id",
            "type": "bytes32"
          }
        ],
        "name": "getEmaPriceUnsafe",
        "outputs": [
          {
            "components": [
              {
                "internalType": "int64",
                "name": "price",
                "type": "int64"
              },
              {
                "internalType": "uint64",
                "name": "conf",
                "type": "uint64"
              },
              {
                "internalType": "int32",
                "name": "expo",
                "type": "int32"
              },
              {
                "internalType": "uint256",
                "name": "publishTime",
                "type": "uint256"
              }
            ],
            "internalType": "struct PythStructs.Price",
            "name": "price",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "id",
            "type": "bytes32"
          }
        ],
        "name": "getPrice",
        "outputs": [
          {
            "components": [
              {
                "internalType": "int64",
                "name": "price",
                "type": "int64"
              },
              {
                "internalType": "uint64",
                "name": "conf",
                "type": "uint64"
              },
              {
                "internalType": "int32",
                "name": "expo",
                "type": "int32"
              },
              {
                "internalType": "uint256",
                "name": "publishTime",
                "type": "uint256"
              }
            ],
            "internalType": "struct PythStructs.Price",
            "name": "price",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "id",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "age",
            "type": "uint256"
          }
        ],
        "name": "getPriceNoOlderThan",
        "outputs": [
          {
            "components": [
              {
                "internalType": "int64",
                "name": "price",
                "type": "int64"
              },
              {
                "internalType": "uint64",
                "name": "conf",
                "type": "uint64"
              },
              {
                "internalType": "int32",
                "name": "expo",
                "type": "int32"
              },
              {
                "internalType": "uint256",
                "name": "publishTime",
                "type": "uint256"
              }
            ],
            "internalType": "struct PythStructs.Price",
            "name": "price",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "id",
            "type": "bytes32"
          }
        ],
        "name": "getPriceUnsafe",
        "outputs": [
          {
            "components": [
              {
                "internalType": "int64",
                "name": "price",
                "type": "int64"
              },
              {
                "internalType": "uint64",
                "name": "conf",
                "type": "uint64"
              },
              {
                "internalType": "int32",
                "name": "expo",
                "type": "int32"
              },
              {
                "internalType": "uint256",
                "name": "publishTime",
                "type": "uint256"
              }
            ],
            "internalType": "struct PythStructs.Price",
            "name": "price",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes[]",
            "name": "updateData",
            "type": "bytes[]"
          }
        ],
        "name": "getUpdateFee",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "feeAmount",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getValidTimePeriod",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "validTimePeriod",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes[]",
            "name": "updateData",
            "type": "bytes[]"
          },
          {
            "internalType": "bytes32[]",
            "name": "priceIds",
            "type": "bytes32[]"
          },
          {
            "internalType": "uint64",
            "name": "minPublishTime",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "maxPublishTime",
            "type": "uint64"
          }
        ],
        "name": "parsePriceFeedUpdates",
        "outputs": [
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
              },
              {
                "components": [
                  {
                    "internalType": "int64",
                    "name": "price",
                    "type": "int64"
                  },
                  {
                    "internalType": "uint64",
                    "name": "conf",
                    "type": "uint64"
                  },
                  {
                    "internalType": "int32",
                    "name": "expo",
                    "type": "int32"
                  },
                  {
                    "internalType": "uint256",
                    "name": "publishTime",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct PythStructs.Price",
                "name": "price",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "int64",
                    "name": "price",
                    "type": "int64"
                  },
                  {
                    "internalType": "uint64",
                    "name": "conf",
                    "type": "uint64"
                  },
                  {
                    "internalType": "int32",
                    "name": "expo",
                    "type": "int32"
                  },
                  {
                    "internalType": "uint256",
                    "name": "publishTime",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct PythStructs.Price",
                "name": "emaPrice",
                "type": "tuple"
              }
            ],
            "internalType": "struct PythStructs.PriceFeed[]",
            "name": "priceFeeds",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes[]",
            "name": "updateData",
            "type": "bytes[]"
          }
        ],
        "name": "updatePriceFeeds",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes[]",
            "name": "updateData",
            "type": "bytes[]"
          },
          {
            "internalType": "bytes32[]",
            "name": "priceIds",
            "type": "bytes32[]"
          },
          {
            "internalType": "uint64[]",
            "name": "publishTimes",
            "type": "uint64[]"
          }
        ],
        "name": "updatePriceFeedsIfNecessary",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      }
    ],
    TUGPAIR_ABI: [{"inputs":[{"internalType":"address","name":"_tugStorageAddress","type":"address"},{"internalType":"address","name":"_depositToken","type":"address"},{"internalType":"uint8","name":"_token0Index","type":"uint8"},{"internalType":"uint8","name":"_token1Index","type":"uint8"},{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"uint256","name":"_epochDuration","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"CannotDepositToEpochZero","type":"error"},{"inputs":[],"name":"DepositIsZero","type":"error"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DepositTooLow","type":"error"},{"inputs":[],"name":"EpochDurationIsZero","type":"error"},{"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"}],"name":"EpochNotConcluded","type":"error"},{"inputs":[{"internalType":"uint256","name":"currentEpoch","type":"uint256"}],"name":"EpochOutOfSync","type":"error"},{"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"}],"name":"EpochPreviouslyConcluded","type":"error"},{"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"EpochWinningsAlreadyClaimed","type":"error"},{"inputs":[{"internalType":"uint8","name":"invalidSide","type":"uint8"}],"name":"InvalidDepositSide","type":"error"},{"inputs":[],"name":"InvalidSharePrice","type":"error"},{"inputs":[{"internalType":"uint8","name":"invalidTokenIndex","type":"uint8"}],"name":"InvalidTokenIndex","type":"error"},{"inputs":[{"internalType":"uint8","name":"tokenIndexWithInvalidPrice","type":"uint8"}],"name":"InvalidTokenPrice","type":"error"},{"inputs":[],"name":"InvalidTreasuryAddress","type":"error"},{"inputs":[],"name":"TokenTransferFailed","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"usdCollected","type":"uint256"}],"name":"Collection","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint8","name":"side","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"usdAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"sharesIssued","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"}],"name":"EpochEnded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"}],"name":"EpochStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LOSE_SIDE_MUL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WIN_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WIN_SIDE_MUL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"accumulatedFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collectFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_epochs","type":"uint256[]"},{"internalType":"bytes[]","name":"priceUpdateData","type":"bytes[]"}],"name":"collectWinnings","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_epochs","type":"uint256"},{"internalType":"bytes[]","name":"priceUpdateData","type":"bytes[]"}],"name":"collectWinningsPerEpoch","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_epochs","type":"uint256"}],"name":"collectWinningsPerEpochWithoutUpdateEpoch","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"currentEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"currentTug","outputs":[{"internalType":"uint256","name":"epochAmountA","type":"uint256"},{"internalType":"uint256","name":"epochAmountB","type":"uint256"},{"internalType":"uint256","name":"userLatestEpoch","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint8","name":"_side","type":"uint8"},{"internalType":"bytes[]","name":"priceUpdateData","type":"bytes[]"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"depositToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochData","outputs":[{"internalType":"uint256","name":"token0InitialPrice","type":"uint256"},{"internalType":"uint256","name":"token1InitialPrice","type":"uint256"},{"internalType":"uint256","name":"token0SharesIssued","type":"uint256"},{"internalType":"uint256","name":"token1SharesIssued","type":"uint256"},{"internalType":"uint256","name":"totalPot","type":"uint256"},{"internalType":"int8","name":"winningSide","type":"int8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epochDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDepositToken","outputs":[{"internalType":"address","name":"depositTokenToReturn","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestEpoch","outputs":[{"internalType":"uint256","name":"latestEpoch","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index1","type":"uint8"},{"internalType":"uint8","name":"_index2","type":"uint8"},{"internalType":"bytes[]","name":"priceUpdateData","type":"bytes[]"}],"name":"getPrice","outputs":[{"internalType":"uint256","name":"price1","type":"uint256"},{"internalType":"uint256","name":"price2","type":"uint256"},{"internalType":"uint8","name":"decimal1","type":"uint8"},{"internalType":"uint8","name":"decimal2","type":"uint8"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint8","name":"_side","type":"uint8"},{"internalType":"uint256","name":"token0Price","type":"uint256"},{"internalType":"uint256","name":"token1Price","type":"uint256"}],"name":"getQtyOfSharesToIssue","outputs":[{"internalType":"uint256","name":"qtyOfShares","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"epochToCheck","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"getSharesBalance","outputs":[{"internalType":"uint256","name":"token0Shares","type":"uint256"},{"internalType":"uint256","name":"token1Shares","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"epochToCheck","type":"uint256"}],"name":"getSharesIssued","outputs":[{"internalType":"uint256","name":"token0SharesIssued","type":"uint256"},{"internalType":"uint256","name":"token1SharesIssued","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserCurrentEpoch","outputs":[{"internalType":"uint256","name":"latestEpoch","type":"uint256"},{"internalType":"uint256","name":"totalDepositA","type":"uint256"},{"internalType":"uint256","name":"totalDepositB","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_epoch","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"getWinnings","outputs":[{"internalType":"uint256","name":"amountOfDaiWinnings","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pricingEngine","outputs":[{"internalType":"contract PricingEngineInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token0Index","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1Index","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenRegistry","outputs":[{"internalType":"contract TokenRegistryInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tugStorage","outputs":[{"internalType":"contract TugStorageInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes[]","name":"priceUpdateData","type":"bytes[]"}],"name":"updateEpoch","outputs":[],"stateMutability":"payable","type":"function"}],
});