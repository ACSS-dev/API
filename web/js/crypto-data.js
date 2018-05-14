var SmData = {
    "tokens": {
        "OMG": {
            "name": "OmiseGO",
            "decimals": 18,
            "address": "0x5b9a857e0C3F2acc5b94f6693536d3Adf5D6e6Be",
            "minimalRecordResolution": "1000000000000000",
            "maxPerBlockImbalance": "775091297865175138304",
            "maxTotalImbalance": "1096640332676811325440"
        },
        "KNC": {
            "name": "KyberNetwork",
            "decimals": 18,
            "address": "0xE5585362D0940519d87d29362115D4cc060C56B3",
            "minimalRecordResolution": "1000000000000000",
            "maxPerBlockImbalance": "2711997842670896021504",
            "maxTotalImbalance": "3833713935933528080384"
        },
        "EOS": {
            "name": "Eos",
            "decimals": 18,
            "address": "0xd3c64BbA75859Eb808ACE6F2A6048ecdb2d70817",
            "minimalRecordResolution": "1000000000000000",
            "maxPerBlockImbalance": "1019792725446519947264",
            "maxTotalImbalance": "1441689429340878536704"
        },
        "SNT": {
            "name": "STATUS",
            "decimals": 18,
            "address": "0xF739577d63cdA4a534B0fB92ABf8BBf6EA48d36c",
            "minimalRecordResolution": "10000000000000000",
            "maxPerBlockImbalance": "37434287125568931495936",
            "maxTotalImbalance": "38806865287259009056768"
        },
        "ELF": {
            "name": "AELF",
            "decimals": 18,
            "address": "0x7174FCb9C2A49c027C9746983D8262597b5EcCb1",
            "minimalRecordResolution": "1000000000000000",
            "maxPerBlockImbalance": "6727090010493247553536",
            "maxTotalImbalance": "9489286595433755312128"
        },
        "POWR": {
            "name": "Power Ledger",
            "decimals": 6,
            "address": "0x2C4EfAa21f09c3C6EEF0Edb001E9bffDE7127D3B",
            "minimalRecordResolution": "1000",
            "maxPerBlockImbalance": "8860273487",
            "maxTotalImbalance": "8860273487"
        },
        "MANA": {
            "name": "MANA",
            "decimals": 18,
            "address": "0xf5E314c435B3B2EE7c14eA96fCB3307C3a3Ef608",
            "minimalRecordResolution": "1000000000000000",
            "maxPerBlockImbalance": "54907343857240902729728",
            "maxTotalImbalance": "54907343857240902729728"
        },
        "BAT": {
            "name": "Basic Attention Token",
            "decimals": 18,
            "address": "0x04A34c8f5101Dcc50bF4c64D1C7C124F59bb988c",
            "minimalRecordResolution": "1000000000000000",
            "maxPerBlockImbalance": "13480268257338322845696",
            "maxTotalImbalance": "13480268257338322845696"
        },
        "REQ": {
            "name": "Request",
            "decimals": 18,
            "address": "0xa448cD1DB463ae738a171C483C56157d6B83B97f",
            "minimalRecordResolution": "1000000000000000",
            "maxPerBlockImbalance": "32547010644498297389056",
            "maxTotalImbalance": "33735087557886343118848"
        },
        "GTO": {
            "name": "Gifto",
            "decimals": 5,
            "address": "0x6B07b8360832c6bBf05A39D9d443A705032bDc4d",
            "minimalRecordResolution": "10",
            "maxPerBlockImbalance": "1925452883",
            "maxTotalImbalance": "1925452883"
        },
        "ETH": {
            "name": "Ethereum",
            "decimals": 18,
            "address": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
        }
    },
    "exchanges": {
        "binance": {
            "ETH": "0x44d34a119ba21a42167ff8b77a88f0fc7bb2db90",
            "OMG": "0x44d34a119ba21a42167ff8b77a88f0fc7bb2db90",
            "KNC": "0x44d34a119ba21a42167ff8b77a88f0fc7bb2db90",
            "SNT": "0x44d34a119ba21a42167ff8b77a88f0fc7bb2db90",
            "EOS": "0x44d34a119ba21a42167ff8b77a88f0fc7bb2db90",
            "ELF": "0x44d34a119ba21a42167ff8b77a88f0fc7bb2db90",
            "POWR": "0x44d34a119ba21a42167ff8b77a88f0fc7bb2db90",
            "MANA": "0x44d34a119ba21a42167ff8b77a88f0fc7bb2db90",
            "BAT": "0x44d34a119ba21a42167ff8b77a88f0fc7bb2db90",
            "REQ": "0x44d34a119ba21a42167ff8b77a88f0fc7bb2db90",
            "GTO": "0x44d34a119ba21a42167ff8b77a88f0fc7bb2db90"
        }
    },
    "permission": {
        "KyberNetwork": {
            "admin": "0x85Ff15b853df828C1a1E5bba4254600724Ba4Ca3",
            "operator": [
                "0x85Ff15b853df828C1a1E5bba4254600724Ba4Ca3"
            ],
            "alerter": []
        },
        "KyberReserve": {
            "admin": "0x85Ff15b853df828C1a1E5bba4254600724Ba4Ca3",
            "operator": [
                "0x760d30979eb313a2d23c53e4fb55986183b0ffd9",
                "0xedd15b61505180b3a0c25b193df27ef10214d851"
            ],
            "alerter": []
        },
        "ConversionRates": {
            "admin": "0x85Ff15b853df828C1a1E5bba4254600724Ba4Ca3",
            "operator": [
                "0x760d30979eb313a2d23c53e4fb55986183b0ffd9",
                "0xedd15b61505180b3a0c25b193df27ef10214d851"
            ],
            "alerter": []
        },
        "FeeBurner": {
            "admin": "0x85Ff15b853df828C1a1E5bba4254600724Ba4Ca3",
            "operator": [
                "0x85Ff15b853df828C1a1E5bba4254600724Ba4Ca3"
            ],
            "alerter": []
        },
        "WhiteList": {
            "admin": "0x85Ff15b853df828C1a1E5bba4254600724Ba4Ca3",
            "operator": [
                "0x85Ff15b853df828C1a1E5bba4254600724Ba4Ca3"
            ],
            "alerter": []
        },
        "ExpectedRate": {
            "admin": "0x85Ff15b853df828C1a1E5bba4254600724Ba4Ca3",
            "operator": [
                "0x85Ff15b853df828C1a1E5bba4254600724Ba4Ca3"
            ],
            "alerter": []
        }
    },
    "whitelist params": {
        "testers": [
            "0x053a9f418F7BE3391A2821BE23b418a909f42F54"
        ],
        "testers category": 9,
        "testers cap": 5000,
        "KGT address": "0xfce10cbf5171dc12c215bbcca5dd75cbaea72506",
        "KGT cap": 0,
        "users": [],
        "users category": 1,
        "users cap": 0,
        "default cap": 5000000
    },
    "max gas price": "90000000000",
    "neg diff in bps": 20,
    "min expected rate slippage": 300,
    "KNC wallet": "0xBC33a1F908612640F2849b56b67a4De4d179C151",
    "KNC to ETH rate": 300,
    "valid duration block": 60,
    "reserve": "0x0FC1CF3e7DD049F7B42e6823164A64F76fC06Be0",
    "pricing": "0x535DE1F5a982c2a896da62790a42723A71c0c12B",
    "network": "0x0a56d8a49E71da8d7F9C65F95063dB48A3C9560B",
    "wrapper": "0x9de0a60F4A489e350cD8E3F249f4080858Af41d3",
    "feeburner": "0x89B5c470559b80e541E53eF78244edD112c7C58A"
};
