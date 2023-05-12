/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TricryptoStrategy,
  TricryptoStrategyInterface,
} from "../../../contracts/curve/TricryptoStrategy";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IYieldBox",
        name: "_yieldBox",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lpGauge",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lpGetter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_multiSwapper",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountQueued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_old",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_new",
        type: "uint256",
      },
    ],
    name: "DepositThreshold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_old",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "LPGetterSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_old",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "MultiSwapper",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "cheapWithdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "compound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "compoundAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "depositThreshold",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposited",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "description_",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lpGauge",
    outputs: [
      {
        internalType: "contract ITricryptoLPGauge",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lpGetter",
    outputs: [
      {
        internalType: "contract ITricryptoLPGetter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minter",
    outputs: [
      {
        internalType: "contract ICurveMinter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setDepositThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_swapper",
        type: "address",
      },
    ],
    name: "setMultiSwapper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpGetter",
        type: "address",
      },
    ],
    name: "setTricryptoLPGetter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapper",
    outputs: [
      {
        internalType: "contract IUniswapV2Router02",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenId",
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
    inputs: [],
    name: "tokenType",
    outputs: [
      {
        internalType: "enum TokenType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wrappedNative",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "yieldBox",
    outputs: [
      {
        internalType: "contract IYieldBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x610140604081815234620004be5760c08262002b648038038091620000258285620004c3565b833981010312620004be578151906001600160a01b038083168303620004be5760209062000055828601620004fd565b9362000063848701620004fd565b6200007160608801620004fd565b6200008d60a06200008560808b01620004fd565b9901620004fd565b926080528660a05260018060a01b0319918480806000963387895416178855818b519c338a7f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a360016002551660c05216928386600354161760035516928360e052816101009b168b521694856004948554161784556376d8b11760e01b895286898581865afa988915620004b457859962000471575b508061012099168952875191635fcbd28560e01b808452888487818b5afa938415620003ae57879462000432575b50895163095ea7b360e01b958682528782015289816044818b886000199a8b6024850152165af18015620004285762000406575b50888387541691878c518094819382525afa908115620003ae57839189898d8d948294620003b8575b5090604492915195869485938c85528d8501528a6024850152165af18015620003ae5791899188936200038c575b506044848d5116918c5194859384928a84528b8401528860248401525af1801562000382579288959492879260449562000360575b5060c05116908a519889968795865285015260248401525af190811562000355575062000320575b5050519061263792836200052d843960805183818161036f01528181610e1c015261146c015260a051836101b3015260c05183818161024d015281816103c001528181610daa015281816111880152818161177401528181611a830152818161239f01526124c2015260e05183818161068f01528181610e8601528181611420015281816116de015281816119490152818161221101526123280152518281816108b6015281816110d7015281816119da0152611e4801525181818161016c0152818161087201528181610cbf0152818161109c01528181611747015261198d0152f35b816200034492903d106200034d575b6200033b8183620004c3565b81019062000512565b5038806200023c565b503d6200032f565b8451903d90823e3d90fd5b6200037a90883d8a116200034d576200033b8183620004c3565b503862000214565b89513d88823e3d90fd5b620003a690833d85116200034d576200033b8183620004c3565b5038620001df565b8a513d89823e3d90fd5b95505050505081813d8311620003fe575b620003d58183620004c3565b81010312620003fa57888a60448a8a620003f08896620004fd565b93909192620001b1565b8680fd5b503d620003c9565b62000420908a3d8c116200034d576200033b8183620004c3565b503862000188565b8b513d8a823e3d90fd5b9093508881813d831162000469575b6200044d8183620004c3565b81010312620003fa576200046190620004fd565b923862000154565b503d62000441565b9098508681813d8311620004ac575b6200048c8183620004c3565b81010312620004a857620004a090620004fd565b973862000126565b8480fd5b503d62000480565b88513d87823e3d90fd5b600080fd5b601f909101601f19168101906001600160401b03821190821017620004e757604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b0382168203620004be57565b90816020910312620004be57518015158103620004be579056fe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde0314611e77575081630754617214611e33578163078dfbe714611d2657816317d70f7c14611d0b57816322a58c5d146118c05781632b3297f91461189757816330fa738c1461187b57816348dcb051146116a55781634cce992d146116455781634e71e0c8146115925781635018830114610dd9578163726c64f21461156a5781637284e416146114f7578163734daaa1146114d85781638da5cb5b146114b0578163afa91cc61461144f578163c5ec78741461140b578163ce845d1d14610dd9578163db2e21bc14610e4b578163de40657714610e07578163e30c397814610dde578163e3575f0514610dd9578163eb6d3a1114610d95578163ec32e1b914610c52578163f3fef3a31461033f578163f64920b8146101e257508063f6b4dfb41461019f5763f7c618c11461015957600080fd5b3461019b578160031936011261019b57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5080fd5b503461019b578160031936011261019b57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b90503461033b5760209182600319360112610337576101ff611f2d565b84546001600160a01b039391906102199085163314612006565b85848084541692169484519086847fec75cca752304221051372b35f3488d6d59ae4be7bbbb04869f1e887318e12998580a37f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b360e01b9384825285820152826024820152878160448186865af1801561032d57916044939189969593610310575b50876001600160601b0360a01b86541617855586519788958694855284015260001960248401525af190811561030757506102da578280f35b816102f992903d10610300575b6102f18183611fa5565b810190612160565b5038808280f35b503d6102e7565b513d85823e3d90fd5b61032690873d8911610300576102f18183611fa5565b50386102a1565b86513d85823e3d90fd5b8380fd5b8280fd5b9190503461033b578060031936011261033b5761035a611f2d565b6001600160a01b0392602492833591610396337f000000000000000000000000000000000000000000000000000000000000000088161461246a565b61039e61258d565b826103a76122fe565b10610c055781516370a0823160e01b80825230838301527f00000000000000000000000000000000000000000000000000000000000000008816966020969092878185818c5afa908115610665578b91610bd8575b50861161066f575b84518281523085820152878185818c5afa908115610665579087918c91610634575b50106105f257845198878a019163a9059cbb60e01b835216988984820152866044820152604481526080810181811067ffffffffffffffff8211176105de578652518a91829190828b5af13d156105d7573d61048181611fc7565b9061048e87519283611fa5565b81523d8b8983013e5b816105a7575b5015610566579085929184519788938492835230908301525afa801561055c57869061050a575b7f058b581e2433b8b02263f5b0e5c2889fcb7b3495112884a3147619038fba46d89450806104fb575b5051908152a2600160025580f35b61050490612178565b386104ed565b508284813d8311610555575b6105208183611fa5565b81010312610550577f058b581e2433b8b02263f5b0e5c2889fcb7b3495112884a3147619038fba46d893516104c4565b600080fd5b503d610516565b81513d88823e3d90fd5b50601c9085606494519362461bcd60e51b85528401528201527f426f72696e6745524332303a205472616e73666572206661696c6564000000006044820152fd5b805180159250889083156105bf575b5050503861049d565b6105cf9350820181019101612160565b3887816105b6565b6060610497565b84604187634e487b7160e01b600052526000fd5b845162461bcd60e51b8152808501889052601d818501527f54726963727970746f53747261746567793a206e6f7420656e6f7567680000006044820152606490fd5b809250898092503d831161065e575b61064d8183611fa5565b810103126105505786905138610426565b503d610643565b86513d8d823e3d90fd5b89855161067b81611f89565b528451633313458360e01b815230858201527f00000000000000000000000000000000000000000000000000000000000000008a1690888186818f865af1908115610ab3578c91610bab575b5061086f575b8a865191848352308784015289838781845afa92831561083257829361083c575b50803b1561019b5781809160448a5180948193631c683a1b60e11b8352888d84015260018c8401525af180156108325761081a575b50508985541690865163af30c87360e01b8152818782015289818781865afa908115610810578d916107e3575b5060328102818104603214821517156107d1578a926107778f93612710604494049061213d565b928a51958694859363ca26855760e01b85528c8501528a8401525af18015610665579088916107a8575b5050610404565b813d83116107ca575b6107bb8183611fa5565b810103126105505786386107a1565b503d6107b1565b634e487b7160e01b8e5260118852868efd5b90508981813d8311610809575b6107fa8183611fa5565b81010312610550575138610750565b503d6107f0565b88513d8f823e3d90fd5b61082390611f43565b61082e578a38610723565b8a80fd5b88513d84823e3d90fd5b8a809294508193503d8311610868575b6108568183611fa5565b81010312610550578b905191386106ee565b503d61084c565b897f0000000000000000000000000000000000000000000000000000000000000000168b875185815230888201528a818881865afa908115610ba1578291610b70575b508c7f000000000000000000000000000000000000000000000000000000000000000016803b1561033b578285898b838e5195869485936335313c2160e11b85528401525af18015610b6657908391610b52575b5050885186815230898201528b818981875afa928315610b475792610b18575b50808211610937575b5050506106cd565b6109409161213d565b87519161094c83611f6d565b6002835288368c85013761095f83612051565b528a61096a83612074565b528b600354168d895163d06ca61f60e01b8152838a8201528a898201528181806109976044820189612100565b0381865afa918215610b0d5790816109b593610af2575b5050612074565b516032810281810460321482151715610adf578f9392916127106109da92049061213d565b91838a610a0b8d51978896879586946338ed173960e01b86528501528d84015260a0604484015260a4830190612100565b30606483015268056bc75e2d63100000608483015203925af18015610ab357610abd575b5085518381523086820152888186818d5afa8015610ab35789908d90610a78575b6000805160206125e28339815191529250610a6a81612178565b8851908152a138808061092f565b5081813d8311610aac575b610a8d8183611fa5565b8101031261055057886000805160206125e28339815191529151610a50565b503d610a83565b87513d8e823e3d90fd5b610ad8903d808e833e610ad08183611fa5565b810190612084565b5038610a2f565b50634e487b7160e01b8f5260118952878ffd5b610b0692503d8091833e610ad08183611fa5565b8f806109ae565b8b51903d90823e3d90fd5b9091508a81813d8311610b40575b610b308183611fa5565b8101031261055057519038610926565b503d610b26565b8a51903d90823e3d90fd5b610b5b90611f43565b61019b578138610906565b8a513d85823e3d90fd5b8092508b8092503d8311610b9a575b610b898183611fa5565b81010312610550578c9051386108b2565b503d610b7f565b89513d84823e3d90fd5b90508881813d8311610bd1575b610bc28183611fa5565b810103126105505751386106c7565b503d610bb8565b90508781813d8311610bfe575b610bef8183611fa5565b810103126105505751386103fc565b503d610be5565b6023856020608494519362461bcd60e51b85528401528201527f54726963727970746f53747261746567793a20616d6f756e74206e6f742076616044820152621b1a5960ea1b6064820152fd5b9190503461033b576020908160031936011261033757610c70611f2d565b84546001600160a01b03949190610c8a9086163314612006565b8585806003541692169584519087847fe36d79dcda63d47bee388b7dde8bba0b326a1b459889de48dc94dcf3504eda4b8580a37f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b360e01b9384825285820152826024820152868160448186865af1801561032d57926044928895928a989795610d78575b5086519788958694855284015260001960248401525af1908115610d6f5750610d51575b50506001600160601b0360a01b600354161760035580f35b81610d6792903d10610300576102f18183611fa5565b503880610d39565b513d86823e3d90fd5b610d8e90873d8911610300576102f18183611fa5565b5038610d15565b50503461019b578160031936011261019b57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b611fe3565b50503461019b578160031936011261019b5760015490516001600160a01b039091168152602090f35b50503461019b578160031936011261019b57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b83833461019b578160031936011261019b5781546001600160a01b039390610e769085163314612006565b828251610e8281611f89565b52837f000000000000000000000000000000000000000000000000000000000000000016825191633313458360e01b83523081840152602095602493878186818a885af19081156110335787916113de575b50611088575b84516370a0823160e01b815230838201529287848681845afa938415611033578794611059575b50803b15611055578680916044885180948193631c683a1b60e11b8352898984015260018b8401525af180156110335790879161103d575b5050815416845163af30c87360e01b8152838382015287818681855afa908115611033578791611006575b506032810281810460321482151715610ff457604492610f8d8a9695936127108b94049061213d565b8851978896879563ca26855760e01b87528601528401525af1928315610fe95792610fba575b5051908152f35b9091508281813d8311610fe2575b610fd28183611fa5565b8101031261055057519083610fb3565b503d610fc8565b8251903d90823e3d90fd5b634e487b7160e01b8852601184528588fd5b90508781813d831161102c575b61101d8183611fa5565b81010312610550575188610f64565b503d611013565b86513d89823e3d90fd5b61104690611f43565b611051578588610f39565b8580fd5b8680fd5b9093508781813d8311611081575b6110718183611fa5565b8101031261055057519288610f01565b503d611067565b84516370a0823160e01b80825230848301527f000000000000000000000000000000000000000000000000000000000000000083169189818881865afa90811561131c5789916113b1575b50837f000000000000000000000000000000000000000000000000000000000000000016803b156113ad57898091898b51809481936335313c2160e11b83528c8c8401525af1801561138b57908a91611395575b505087519082825230868301528a828981875afa91821561138b578a9261135c575b5080821161115b575b50505050610eda565b6111649161213d565b9187519061117182611f6d565b6002825288368c84013761118482612051565b52837f00000000000000000000000000000000000000000000000000000000000000001692836111b383612074565b52846003541691895163d06ca61f60e01b815282888201528a8a8201528b81806111e06044820186612100565b0381875afa90811561135257906111fe918d91611338575b50612074565b51603281028181046032148215171561132657928c896112568d958f989561122c90612710869a049061213d565b9851988997889687956338ed173960e01b875286015284015260a0604484015260a4830190612100565b30606483015268056bc75e2d63100000608483015203925af1801561131c57908a9291611302575b5086885180948193825230888301525afa801561103357889088906112c7575b6000805160206125e283398151915292506112b881612178565b8751908152a187808080611152565b5081813d83116112fb575b6112dc8183611fa5565b8101031261055057876000805160206125e2833981519152915161129e565b503d6112d2565b611315903d808c833e610ad08183611fa5565b508a61127e565b88513d8b823e3d90fd5b634e487b7160e01b8d52601189528a8dfd5b61134c91503d808f833e610ad08183611fa5565b8e6111f8565b8b513d8e823e3d90fd5b9091508a81813d8311611384575b6113748183611fa5565b810103126105505751908b611149565b503d61136a565b89513d8c823e3d90fd5b61139e90611f43565b6113a957888b611127565b8880fd5b8980fd5b90508981813d83116113d7575b6113c88183611fa5565b8101031261055057518a6110d3565b503d6113be565b90508781813d8311611404575b6113f58183611fa5565b81010312610550575188610ed4565b503d6113eb565b50503461019b578160031936011261019b57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b83903461019b57602036600319011261019b576114a89061149a337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161461246a565b6114a261258d565b356124a5565b600160025580f35b50503461019b578160031936011261019b57905490516001600160a01b039091168152602090f35b50503461019b578160031936011261019b576020906005549051908152f35b50503461019b578160031936011261019b5780516115669161151882611f6d565b603282527f43757276652d54726963727970746f20737472617465677920666f722077726160208301527170706564206e61746976652061737365747360701b818301525191829182611ee4565b0390f35b90503461033b578260031936011261033b575490516001600160a01b03909116815260209150f35b9190503461033b578260031936011261033b576001546001600160a01b039290918383169190338390036116025750508084549384167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08680a36001600160a01b03199283161783551660015580f35b906020606492519162461bcd60e51b8352820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b90503461033b57602036600319011261033b577f3b779194d2cc7daf4de546bec10f6f325d421b2e202c11aa24e86e39845860cc90359161169060018060a01b038554163314612006565b6005548151908152836020820152a160055580f35b83833461019b578160031936011261019b578051633313458360e01b815230848201526020939092906001600160a01b038585602481867f000000000000000000000000000000000000000000000000000000000000000086165af194851561184257839561184c575b50829480611722575b5050505051908152f35b849550908394916117c9939492519161173a83611f6d565b6002835287368a850137807f00000000000000000000000000000000000000000000000000000000000000001661177084612051565b52807f00000000000000000000000000000000000000000000000000000000000000001661179d84612074565b526003541690875180958194829363d06ca61f60e01b8452898401528a60248401526044830190612100565b03915afa90811561184257906117e59184916118285750612074565b51916032830291838304603214841517156118155750509061271061180b92049061213d565b9083808080611718565b634e487b7160e01b825260119052602490fd5b61183c91503d8086833e610ad08183611fa5565b866111f8565b84513d85823e3d90fd5b9094508581813d8311611874575b6118648183611fa5565b810103126105505751938661170f565b503d61185a565b50503461019b578160031936011261019b576020905160018152f35b50503461019b578160031936011261019b5760035490516001600160a01b039091168152602090f35b9190503461033b57602090816003193601126103375782359267ffffffffffffffff8411611d075736602385011215611d075784848201359461190286611fc7565b9561190f85519788611fa5565b80875260249636888385010111610337578188889401848301370101528151633313458360e01b815230828201526001600160a01b0394907f0000000000000000000000000000000000000000000000000000000000000000861690858184818b865af1908115611c1b578891611cd6575b5061198a578680f35b857f0000000000000000000000000000000000000000000000000000000000000000168451886370a0823160e01b93848352308784015288838781875afa928315610832578293611ca7575b50897f000000000000000000000000000000000000000000000000000000000000000016803b1561033b578683928a5194859384926335313c2160e11b84528c8401525af18015611c8a57611c94575b50855190838252308683015287828681865afa918215611c8a578a92611c5b575b50808211611a57575b5050508680f35b611a609161213d565b855191611a6c83611f6d565b60028352863689850137611a7f83612051565b52877f0000000000000000000000000000000000000000000000000000000000000000169788611aae84612074565b526003541690865163d06ca61f60e01b8152818782015287868201528a8180611ada6044820188612100565b0381865afa908115611c515790611af7918c91611c375750612074565b516032810281810460321482151715611c2557918b611b21819593612710611b4e9896049061213d565b918a51968795869485936338ed173960e01b85528d8501528b84015260a0604484015260a4830190612100565b30606483015268056bc75e2d63100000608483015203925af18015611c1b57908694939291611c01575b5084519687938492835230908301525afa908115610307578491611bc4575b6000805160206125e28339815191529350611bb182612178565b51908152a1388080808080808080611a50565b90508183813d8311611bfa575b611bdb8183611fa5565b81010312610550576000805160206125e2833981519152925190611b97565b503d611bd1565b611c14903d808b833e610ad08183611fa5565b5038611b78565b85513d8a823e3d90fd5b634e487b7160e01b8c5260118852868cfd5b611c4b91503d808e833e610ad08183611fa5565b386111f8565b88513d8d823e3d90fd5b9091508781813d8311611c83575b611c738183611fa5565b8101031261055057519038611a47565b503d611c69565b87513d8c823e3d90fd5b611ca090999199611f43565b9738611a26565b9092508881813d8311611ccf575b611cbf8183611fa5565b8101031261019b575191386119d6565b503d611cb5565b90508581813d8311611d00575b611ced8183611fa5565b81010312611cfc575138611981565b8780fd5b503d611ce3565b8480fd5b50503461019b578160031936011261019b5751908152602090f35b9190503461033b57606036600319011261033b57611d42611f2d565b91602435918215158303611d07576044359283151584036110515760018060a01b03948591611d75838954163314612006565b15611e17571692831590811591611e0f575b5015611dd45750508083549283167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160601b0360a01b8092161782556001541660015580f35b906020606492519162461bcd60e51b835282015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152fd5b905038611d87565b9350505050166001600160601b0360a01b600154161760015580f35b50503461019b578160031936011261019b57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b838534611ee15780600319360112611ee1578183019083821067ffffffffffffffff831117611ece575061156693508152600f82526e43757276652d54726963727970746f60881b60208301525191829182611ee4565b634e487b7160e01b815260418552602490fd5b80fd5b6020808252825181830181905290939260005b828110611f1957505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501611ef7565b600435906001600160a01b038216820361055057565b67ffffffffffffffff8111611f5757604052565b634e487b7160e01b600052604160045260246000fd5b6060810190811067ffffffffffffffff821117611f5757604052565b6020810190811067ffffffffffffffff821117611f5757604052565b90601f8019910116810190811067ffffffffffffffff821117611f5757604052565b67ffffffffffffffff8111611f5757601f01601f191660200190565b34610550576000366003190112610550576020611ffe6122fe565b604051908152f35b1561200d57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b80511561205e5760200190565b634e487b7160e01b600052603260045260246000fd5b80516001101561205e5760400190565b90602090818382031261055057825167ffffffffffffffff93848211610550570181601f82011215610550578051938411611f57578360051b90604051946120ce85840187611fa5565b85528380860192820101928311610550578301905b8282106120f1575050505090565b815181529083019083016120e3565b90815180825260208080930193019160005b828110612120575050505090565b83516001600160a01b031685529381019392810192600101612112565b9190820391821161214a57565b634e487b7160e01b600052601160045260246000fd5b90816020910312610550575180151581036105505790565b60048054604080516305c43acd60e01b815292830184905260209390926001600160a01b03928316918582602481865afa9182156122f3576000926122c4575b5060328202918083046032148115171561214a576121de6044916127108995049061213d565b9160008751958694859363b529fe1d60e01b8552600485015260248401525af19384156122b957600094612288575b50507f00000000000000000000000000000000000000000000000000000000000000001691823b156105505760009260648492845195869384926383df674760e01b845260048401523060248401528160448401525af190811561227e57506122735750565b61227c90611f43565b565b513d6000823e3d90fd5b8181959293953d83116122b2575b6122a08183611fa5565b81010312611ee157505191388061220d565b503d612296565b83513d6000823e3d90fd5b90918682813d83116122ec575b6122db8183611fa5565b81010312611ee157505190386121b8565b503d6122d1565b85513d6000823e3d90fd5b604080516370a0823160e01b80825230600483015290916001600160a01b039160209081856024817f000000000000000000000000000000000000000000000000000000000000000088165afa9485156122b95760009561243b575b5081846004541695602485518098819363af30c87360e01b835260048301525afa9485156122b95760009561240c575b508190602484518096819382523060048301527f0000000000000000000000000000000000000000000000000000000000000000165afa91821561227e57506000916123e0575b509050810180911161214a5790565b82813d8311612405575b6123f48183611fa5565b81010312611ee157505180386123d1565b503d6123ea565b90948282813d8311612434575b6124238183611fa5565b81010312611ee1575051938161238a565b503d612419565b90948282813d8311612463575b6124528183611fa5565b81010312611ee1575051933861235a565b503d612448565b1561247157565b60405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b6044820152606490fd5b6040516370a0823160e01b815230600482015260209081816024817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa90811561258157600091612554575b50600554811161253157507f9447d5abbf0af693ca2937bf8b1ec6a8c9dc4fbac672911c633fb31c78e5e3ca91604051908152a1565b6000805160206125e2833981519152925061254b81612178565b604051908152a1565b908282813d831161257a575b61256a8183611fa5565b81010312611ee1575051386124fb565b503d612560565b6040513d6000823e3d90fd5b600280541461259c5760028055565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fdfede22222b0ac0d69f2a19cd7b1443a29a5f37346640fff3506bdd6a9a9497f9d3a26469706673582212205052b6bc356d7957a62bd1801a7e0f8980aacd3a400acdfe585dc5d8615d2fde64736f6c63430008120033";

type TricryptoStrategyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TricryptoStrategyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TricryptoStrategy__factory extends ContractFactory {
  constructor(...args: TricryptoStrategyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _lpGauge: PromiseOrValue<string>,
    _lpGetter: PromiseOrValue<string>,
    _minter: PromiseOrValue<string>,
    _multiSwapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TricryptoStrategy> {
    return super.deploy(
      _yieldBox,
      _token,
      _lpGauge,
      _lpGetter,
      _minter,
      _multiSwapper,
      overrides || {}
    ) as Promise<TricryptoStrategy>;
  }
  override getDeployTransaction(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _lpGauge: PromiseOrValue<string>,
    _lpGetter: PromiseOrValue<string>,
    _minter: PromiseOrValue<string>,
    _multiSwapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yieldBox,
      _token,
      _lpGauge,
      _lpGetter,
      _minter,
      _multiSwapper,
      overrides || {}
    );
  }
  override attach(address: string): TricryptoStrategy {
    return super.attach(address) as TricryptoStrategy;
  }
  override connect(signer: Signer): TricryptoStrategy__factory {
    return super.connect(signer) as TricryptoStrategy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TricryptoStrategyInterface {
    return new utils.Interface(_abi) as TricryptoStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TricryptoStrategy {
    return new Contract(address, _abi, signerOrProvider) as TricryptoStrategy;
  }
}
