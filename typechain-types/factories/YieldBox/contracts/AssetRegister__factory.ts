/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AssetRegister,
  AssetRegisterInterface,
} from "../../../YieldBox/contracts/AssetRegister";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "enum TokenType",
        name: "tokenType",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
    ],
    name: "AssetRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [],
    name: "assetCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "assets",
    outputs: [
      {
        internalType: "enum TokenType",
        name: "tokenType",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "owners",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum TokenType",
        name: "",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "contract IStrategy",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ids",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum TokenType",
        name: "tokenType",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "registerAsset",
    outputs: [
      {
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040805160808101825260048082526000602083018190529282018390526060820183905280546001808201835593829052825160039091027f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b018054939490939192849260ff19169190849081111561008d5761008d6100e3565b021790555060208201518154610100600160a81b0319166101006001600160a01b039283160217825560408301516001830180546001600160a01b031916919092161790556060909101516002909101556100f9565b634e487b7160e01b600052602160045260246000fd5b61172d806101086000396000f3fe608060405234801561001057600080fd5b50600436106100ce5760003560e01c8063a22cb4651161008c578063cf35bdd011610066578063cf35bdd014610217578063e985e9c51461023a578063eafe7a7414610265578063f242432a1461026d57600080fd5b8063a22cb465146101d1578063b061db94146101e4578063bd85b039146101f757600080fd5b8062fdd58e146100d357806301ffc9a7146101115780630e89341c146101345780632d4e1d52146101625780632eb2c2d61461019c5780634e1273f4146101b1575b600080fd5b6100fe6100e1366004611030565b600160209081526000928352604080842090915290825290205481565b6040519081526020015b60405180910390f35b61012461011f366004611072565b610280565b6040519015158152602001610108565b610155610142366004611096565b5060408051602081019091526000815290565b60405161010891906110af565b6100fe610170366004611111565b600360209081526000948552604080862082529385528385208152918452828420909152825290205481565b6101af6101aa3660046111f0565b6102d2565b005b6101c46101bf3660046112af565b61042c565b604051610108919061131b565b6101af6101df36600461135f565b610577565b6100fe6101f2366004611111565b6105e1565b6100fe610205366004611096565b60026020526000908152604090205481565b61022a610225366004611096565b610691565b60405161010894939291906113b3565b6101246102483660046113f8565b600060208181529281526040808220909352908152205460ff1681565b6004546100fe565b6101af61027b366004611426565b6106db565b60006001600160e01b031982166301ffc9a760e01b14806102b15750636cdb3d1360e11b6001600160e01b03198316145b806102cc57506303a24d0760e21b6001600160e01b03198316145b92915050565b8483146103215760405162461bcd60e51b815260206004820152601860248201527708aa48662626a6a744098cadccee8d040dad2e6dac2e8c6d60431b60448201526064015b60405180910390fd5b61032a886107de565b610338888888888888610861565b6001600160a01b0387163b156104225760405163bc197c8160e01b808252906001600160a01b0389169063bc197c81906103849033908d908c908c908c908c908c908c90600401611501565b602060405180830381600087803b15801561039e57600080fd5b505af11580156103b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d69190611565565b6001600160e01b031916146104225760405162461bcd60e51b815260206004820152601260248201527157726f6e672072657475726e2076616c756560701b6044820152606401610318565b5050505050505050565b6060838281146104795760405162461bcd60e51b815260206004820152601860248201527708aa48662626a6a744098cadccee8d040dad2e6dac2e8c6d60431b6044820152606401610318565b8067ffffffffffffffff81111561049257610492611582565b6040519080825280602002602001820160405280156104bb578160200160208202803683370190505b50915060005b8181101561056d57600160008888848181106104df576104df611598565b90506020020160208101906104f491906115ae565b6001600160a01b03166001600160a01b03168152602001908152602001600020600086868481811061052857610528611598565b9050602002013581526020019081526020016000205483828151811061055057610550611598565b602090810291909101015280610565816115e1565b9150506104c1565b5050949350505050565b336000818152602081815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b600060018560048111156105f7576105f761139d565b1480610614575060028560048111156106125761061261139d565b145b806106305750600385600481111561062e5761062e61139d565b145b61067c5760405162461bcd60e51b815260206004820152601f60248201527f41737365744d616e616765723a2063616e6e6f7420616464204e6174697665006044820152606401610318565b610688858585856109db565b95945050505050565b600481815481106106a157600080fd5b600091825260209091206003909102018054600182015460029092015460ff821693506101009091046001600160a01b0390811692169084565b6106e4866107de565b6106f086868686610f15565b6001600160a01b0385163b156107d65760405163f23a6e6160e01b808252906001600160a01b0387169063f23a6e61906107389033908b908a908a908a908a906004016115fc565b602060405180830381600087803b15801561075257600080fd5b505af1158015610766573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078a9190611565565b6001600160e01b031916146107d65760405162461bcd60e51b815260206004820152601260248201527157726f6e672072657475726e2076616c756560701b6044820152606401610318565b505050505050565b6001600160a01b03811633148061081b57506001600160a01b03811660009081526020818152604080832033845290915290205460ff1615156001145b61085e5760405162461bcd60e51b8152602060048201526014602482015273151c985b9cd9995c881b9bdd08185b1b1bddd95960621b6044820152606401610318565b50565b6001600160a01b0385166108a65760405162461bcd60e51b815260206004820152600c60248201526b4e6f2030206164647265737360a01b6044820152606401610318565b8260005b818110156109765760008686838181106108c6576108c6611598565b90506020020135905060008585848181106108e3576108e3611598565b6001600160a01b038d16600090815260016020908152604080832088845282528220805493909102949094013594508493925090610922908490611643565b90915550506001600160a01b03891660009081526001602090815260408083208584529091528120805483929061095a90849061165a565b925050819055505050808061096e906115e1565b9150506108aa565b50856001600160a01b0316876001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb888888886040516109ca9493929190611672565b60405180910390a450505050505050565b6000600360008660048111156109f3576109f361139d565b6004811115610a0457610a0461139d565b8152602080820192909252604090810160009081206001600160a01b03808916835290845282822090871682528352818120858252909252902054905080610f0d57811580610a6557506001856004811115610a6257610a6261139d565b14155b610ab15760405162461bcd60e51b815260206004820152601e60248201527f5969656c64426f783a204e6f20746f6b656e496420666f7220455243323000006044820152606401610318565b6000856004811115610ac557610ac561139d565b1480610c695750826001600160a01b03166330fa738c6040518163ffffffff1660e01b815260040160206040518083038186803b158015610b0557600080fd5b505afa158015610b19573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3d91906116a4565b6004811115610b4e57610b4e61139d565b856004811115610b6057610b6061139d565b148015610bee5750826001600160a01b031663f6b4dfb46040518163ffffffff1660e01b815260040160206040518083038186803b158015610ba157600080fd5b505afa158015610bb5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd991906116c1565b6001600160a01b0316846001600160a01b0316145b8015610c695750826001600160a01b03166317d70f7c6040518163ffffffff1660e01b815260040160206040518083038186803b158015610c2e57600080fd5b505afa158015610c42573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6691906116de565b82145b610cb55760405162461bcd60e51b815260206004820152601b60248201527f5969656c64426f783a205374726174656779206d69736d6174636800000000006044820152606401610318565b6000856004811115610cc957610cc961139d565b148015610cdd57506001600160a01b038416155b80610cf157506001600160a01b0384163b15155b610d355760405162461bcd60e51b81526020600482015260156024820152742cb4b2b6322137bc1d102737ba1030903a37b5b2b760591b6044820152606401610318565b600480549050905060046040518060800160405280876004811115610d5c57610d5c61139d565b81526001600160a01b038088166020808401919091529087166040830152606090910185905282546001818101855560009485529190932082516003909402018054929390929091839160ff191690836004811115610dbd57610dbd61139d565b021790555060208201518154610100600160a81b0319166101006001600160a01b039283160217825560408301516001830180546001600160a01b031916919092161790556060909101516002909101558060036000876004811115610e2557610e2561139d565b6004811115610e3657610e3661139d565b8152602080820192909252604090810160009081206001600160a01b0389811683529084528282209088168252835281812086825283528181209390935580518281529182019290925282917f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b910160405180910390a281846001600160a01b0316866004811115610eca57610eca61139d565b604080516001600160a01b0388168152602081018690527f30605d4cd099421ed12ca1ba642a1ea2659f679b5cdd0ccd032586640eeaff43910160405180910390a45b949350505050565b6001600160a01b038316610f5a5760405162461bcd60e51b815260206004820152600c60248201526b4e6f2030206164647265737360a01b6044820152606401610318565b6001600160a01b038416600090815260016020908152604080832085845290915281208054839290610f8d908490611643565b90915550506001600160a01b038316600090815260016020908152604080832085845290915281208054839290610fc590849061165a565b909155505060408051838152602081018390526001600160a01b03808616929087169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a450505050565b6001600160a01b038116811461085e57600080fd5b6000806040838503121561104357600080fd5b823561104e8161101b565b946020939093013593505050565b6001600160e01b03198116811461085e57600080fd5b60006020828403121561108457600080fd5b813561108f8161105c565b9392505050565b6000602082840312156110a857600080fd5b5035919050565b600060208083528351808285015260005b818110156110dc578581018301518582016040015282016110c0565b818111156110ee576000604083870101525b50601f01601f1916929092016040019392505050565b6005811061085e57600080fd5b6000806000806080858703121561112757600080fd5b843561113281611104565b935060208501356111428161101b565b925060408501356111528161101b565b9396929550929360600135925050565b60008083601f84011261117457600080fd5b50813567ffffffffffffffff81111561118c57600080fd5b6020830191508360208260051b85010111156111a757600080fd5b9250929050565b60008083601f8401126111c057600080fd5b50813567ffffffffffffffff8111156111d857600080fd5b6020830191508360208285010111156111a757600080fd5b60008060008060008060008060a0898b03121561120c57600080fd5b88356112178161101b565b975060208901356112278161101b565b9650604089013567ffffffffffffffff8082111561124457600080fd5b6112508c838d01611162565b909850965060608b013591508082111561126957600080fd5b6112758c838d01611162565b909650945060808b013591508082111561128e57600080fd5b5061129b8b828c016111ae565b999c989b5096995094979396929594505050565b600080600080604085870312156112c557600080fd5b843567ffffffffffffffff808211156112dd57600080fd5b6112e988838901611162565b9096509450602087013591508082111561130257600080fd5b5061130f87828801611162565b95989497509550505050565b6020808252825182820181905260009190848201906040850190845b8181101561135357835183529284019291840191600101611337565b50909695505050505050565b6000806040838503121561137257600080fd5b823561137d8161101b565b91506020830135801515811461139257600080fd5b809150509250929050565b634e487b7160e01b600052602160045260246000fd5b60808101600586106113d557634e487b7160e01b600052602160045260246000fd5b9481526001600160a01b0393841660208201529190921660408201526060015290565b6000806040838503121561140b57600080fd5b82356114168161101b565b915060208301356113928161101b565b60008060008060008060a0878903121561143f57600080fd5b863561144a8161101b565b9550602087013561145a8161101b565b94506040870135935060608701359250608087013567ffffffffffffffff81111561148457600080fd5b61149089828a016111ae565b979a9699509497509295939492505050565b81835260006001600160fb1b038311156114bb57600080fd5b8260051b8083602087013760009401602001938452509192915050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b0389811682528816602082015260a06040820181905260009061152e908301888a6114a2565b82810360608401526115418187896114a2565b905082810360808401526115568185876114d8565b9b9a5050505050505050505050565b60006020828403121561157757600080fd5b815161108f8161105c565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6000602082840312156115c057600080fd5b813561108f8161101b565b634e487b7160e01b600052601160045260246000fd5b60006000198214156115f5576115f56115cb565b5060010190565b6001600160a01b03878116825286166020820152604081018590526060810184905260a06080820181905260009061163790830184866114d8565b98975050505050505050565b600082821015611655576116556115cb565b500390565b6000821982111561166d5761166d6115cb565b500190565b6040815260006116866040830186886114a2565b82810360208401526116998185876114a2565b979650505050505050565b6000602082840312156116b657600080fd5b815161108f81611104565b6000602082840312156116d357600080fd5b815161108f8161101b565b6000602082840312156116f057600080fd5b505191905056fea2646970667358221220377a7bfb698ba0dc547bd5ac71c54eafa30345d845571fe3903c0142f2812a0a64736f6c63430008090033";

type AssetRegisterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetRegisterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetRegister__factory extends ContractFactory {
  constructor(...args: AssetRegisterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetRegister> {
    return super.deploy(overrides || {}) as Promise<AssetRegister>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AssetRegister {
    return super.attach(address) as AssetRegister;
  }
  override connect(signer: Signer): AssetRegister__factory {
    return super.connect(signer) as AssetRegister__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetRegisterInterface {
    return new utils.Interface(_abi) as AssetRegisterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetRegister {
    return new Contract(address, _abi, signerOrProvider) as AssetRegister;
  }
}
